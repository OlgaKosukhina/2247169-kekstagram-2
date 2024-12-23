import { initializeGallery } from './gallery.js';
import './upload-form.js';
import './upload-form-scaler.js';
import { getData } from './api.js';
import { showErrorMessage } from './notifications.js';
import { initializeFilters } from './filter.js';

getData()
  .then((data) => {
    initializeGallery(data);
    initializeFilters(data);
  })
  .catch((error) => {
    showErrorMessage(error);
  });

