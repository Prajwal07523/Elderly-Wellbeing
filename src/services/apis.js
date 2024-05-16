//const BASE_URL = process.env.REACT_APP_BASE_URL
const BASE_URL="http://localhost:8090";
// AUTH ENDPOINTS
export const endpoints = {
  SIGNUP_API: BASE_URL +"/signup",
  LOGIN_API: BASE_URL +"/login",
  RESETPASSTOKEN_API:  BASE_URL +"/reset-password-token",
  RESETPASSWORD_API: BASE_URL +"/reset-password",
}

// PROFILE ENDPOINTS
export const profileEndpoints = {
  GET_USER_DETAILS_API:  BASE_URL +"/profile/getUserDetails",
  GET_USER_ENROLLED_COURSES_API: BASE_URL +"/profile/getEnrolledCourses",
  GET_INSTRUCTOR_DATA_API: BASE_URL +"/profile/instructorDashboard",
}







// CONTACT-US API
export const contactusEndpoint = {
  CONTACT_US_API: BASE_URL + "/reach/contact",
}

// SETTINGS PAGE API
export const settingsEndpoints = {
  UPDATE_DISPLAY_PICTURE_API:  BASE_URL +"/profile/updateDisplayPicture",
  UPDATE_PROFILE_API: BASE_URL +"/profile/updateProfile",
  CHANGE_PASSWORD_API: BASE_URL + "/changepassword",
  DELETE_PROFILE_API: BASE_URL + "/profile/deleteProfile",
}
