import { HYGRAPH_KEY, HYGRAPH_UPLOAD_URL, HYGRAPH_URL } from '$env/static/private';
import { json } from '@sveltejs/kit';
import fetch from 'node-fetch';
import FormData from 'form-data';
import path from 'path';

export const actions = {
  default: async ({ request }) => {
    console.log('Received request to upload file.');

    const data = await request.formData();
    const file = data.get('fileUpload');

    if (!file) {
      console.error('No file selected');
      return json({ success: false, error: 'No file selected' }, { status: 400 });
    }

    // Create a new FormData instance
    const form = new FormData();

    // Convert the file to a Buffer and append it to FormData
    const fileBuffer = Buffer.from(await file.arrayBuffer());
    const fileExt = path.extname(file.name).toLowerCase();
    const contentType = getContentType(fileExt); // Function to get content type based on file extension
    form.append('file', fileBuffer, {
      filename: file.name,
      contentType
    });

    // Replace 'desired/upload/path' with the actual upload path in Hygraph
    const uploadUrl = `${HYGRAPH_UPLOAD_URL}/upload?url=${encodeURIComponent(HYGRAPH_URL)}`;

    console.log('Uploading file to Hygraph:', uploadUrl);
    console.log('Headers:', {
      Authorization: `Bearer ${HYGRAPH_KEY}`,
      ...form.getHeaders() // Get the headers from FormData instance
    });
    console.log('Form data:', form);

    try {
      const response = await fetch(uploadUrl, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${HYGRAPH_KEY}`,
          ...form.getHeaders() // Get the headers from FormData instance
        },
        body: form
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error from Hygraph:', errorText);
        return json({ success: false, error: 'Error from Hygraph', details: errorText }, { status: response.status });
      }

      try {
        // Attempt to parse the response as JSON
        const result = await response.json();
        console.log('Upload successful:', result);

        // Check the structure of result and ensure it is serializable
        // For example, if result contains Buffer, convert it to base64
        if (result.imageData instanceof Buffer) {
          result.imageData = result.imageData.toString('base64');
        }

        return json({ success: true, result });
      } catch (error) {
        // Handle JSON parsing errors
        console.error('Failed to parse JSON response from Hygraph:', error);
        return json({ success: false, error: 'Failed to parse JSON response from Hygraph' }, { status: 500 });
      }
    } catch (error) {
      // Handle fetch errors
      console.error('Error during file upload:', error);
      return json({ success: false, error: 'Error during file upload' }, { status: 500 });
    }
  }
};

function getContentType(extension) {
  switch (extension) {
    case '.png':
      return 'image/png';
    case '.jpg':
    case '.jpeg':
      return 'image/jpeg';
    case '.gif':
      return 'image/gif';
    default:
      return 'application/octet-stream';
  }
}
