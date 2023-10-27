import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    user: null,
    token: null,  
    courses: [],
    announcements: [],
    work: []
};
export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        //login
        setLogin: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        //logout
        setLogout: (state) => {
            state.user = null;
            state.token = null;
        },

        //announcement
        setAnnouncements: (state, action) => {
            state.announcements = action.payload;
        },

        //setcourse
        setCourses: (state, action) => {
            state.courses = action.payload.courses;
        },

        //updatecourse
        setCourse: (state, action) => {
            const updatedCourses = state.courses.map((course) => {
                if (course.id === action.payload.course._id) return action.payload.course;
                return course;
            });
            state.courses = updatedCourses
        },
        //work
        setWork: (state, action) => {
            state.work = action.payload;
        },
    },
});
export const { setAnnouncements,setCourse,setCourses,setLogin,setLogout,setWork } = authSlice.actions;
export default authSlice.reducer;
