// Select the message from the store
export const selectMessage = (state) => state.greetings.message;

// Select the error from the store
export const selectError = (state) => state.greetings.error;

// Get the status
export const isLoading = (state) => state.greetings.status.type === 'loading';
export const isError = (state) => state.greetings.error !== null;
