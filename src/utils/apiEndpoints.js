export const apiEndpoints = {
    FETCH_FILES: `/files/my`,
    TOGGLE_FILE: (fileId) => `/files/${fileId}/toggle-public`,
    DELETE_FILE: (fileId) => `/files/${fileId}`,
    DOWNLOAD_FILE: (fileId) => `/files/download/${fileId}`,
    GET_CREDITS: `/credits/my`,
    UPLOAD_FILE: `/files/upload`,
    CREATE_ORDER: `/payments/create-order`,
    VERYFY_PAYMENT: `/payments/verify-payment`,
    FETCH_TRANSACTIONS: `/transactions/my`,
    PUBLIC_FILE_VIEW: (fileId) => `/files/public/${fileId}`,
    DOWNLOAD_FILE_PUBLIC: (fileId) => `/files/download/${fileId}`,
};