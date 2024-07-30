import axios from "axios"


const API = axios.create({ baseURL: process.env.REACT_APP_BACKEND_URL })

//Topics admin
export const getAllTopicsAdmin = () => API.get('/api/admin/allTopics', {
    headers: {
        'token': localStorage.getItem('token')
    }
})
export const getDetailTopicAdmin = (id) => API.get('/api/admin/topicDetail/' + id + '', {
    headers: {
        'token': localStorage.getItem('token')
    }
})

export const addTopicAdmin = (data) => API.post('/api/admin/addTopic', data, {
    headers: {
        'token': localStorage.getItem('token')
    }
})

export const editTopicAdmin = (id, data) => API.put('/api/admin/' + id + '/edit', {
    headers: {
        'token': localStorage.getItem('token')
    }, data
})
export const deleteTopicAdmin = (id) => API.delete('/api/admin/' + id + '/delete', {
    headers: {
        'token': localStorage.getItem('token')
    }
})

//course
export const getListCourseAdmin = (slug) => API.get('/api/admin/allCourse/' + slug + '', {
    headers: {
        'token': localStorage.getItem('token')
    }
})

export const getDetailCourseAdmin = (id) => API.get('/api/admin/courseDetail/' + id + '', {
    headers: {
        'token': localStorage.getItem('token')
    }
})

export const addCourseAdmin = (slug, data) => API.put('/api/admin/addcourse/' + slug + '', data, {
    headers: {
        'token': localStorage.getItem('token')
    }
})

export const editCourseAdmin = (id, data) => API.put('/api/admin/edit/' + id + '', {
    headers: {
        'token': localStorage.getItem('token')
    }, data
})
export const deleteCourseAdmin = (id) => API.delete('/api/admin/deletecourse/' + id + '', {
    headers: {
        'token': localStorage.getItem('token')
    }
})

//user
export const getAllUsers = () => API.get('/api/users', {
    headers: {
        'token': localStorage.getItem('token')
    }
})
export const getDetailUser = (id) => API.get('/api/users/' + id + '/edit', {
    headers: {
        'token': localStorage.getItem('token')
    }
})

export const editUser = (id, data) => API.put('/api/users/' + id + '/update', {
    headers: {
        'token': localStorage.getItem('token')
    }, data
})
export const deleteUser = (id) => API.delete('/api/users/' + id + '/delete', {
    headers: {
        'token': localStorage.getItem('token')
    }
}
)
