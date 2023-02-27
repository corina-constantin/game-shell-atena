//895803490384-16dl57j6o9j6ge6dvm9bqgg8rqblqohl.apps.googleusercontent.com

let initialized = false;
const clientId =
  '895803490384-16dl57j6o9j6ge6dvm9bqgg8rqblqohl.apps.googleusercontent.com';

export const initializeGoogleAuth = async () => {
  return new Promise((resolve) => {
    if (initialized) {
      return;
    }

    window.addEventListener('load', () => {
      /* global google */
      google.accounts.id.initialize({
        client_id: clientId,
        callback: (response) => {
          console.log(response);
        },
        scope: 'email profile',
      });
      resolve();
      initialized = true;
    });
  });
};
