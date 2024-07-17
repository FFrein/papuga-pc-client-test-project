import $api from '../http'

export default class ReviewsService{
    static async fetchReview(){
        return $api.get('/reviews');
    }
    static async userReviews(user, page){
        return $api.get(`/userreviews/${user}/${page}`);
    }
    static async pcReviews(pc){
        return $api.get(`/pcreviews/${pc}`);
    }
    static async addReview(Author, PC, Text){
        return $api.post('/review',{Author, PC, Text});
    }
    static async updateReview(RevId, Author, PC, Text){
        return $api.put('/review',{RevId,Author, PC, Text});
    }
    static async deleteReview(id) {
        return $api.delete(`/review/${id}`);
    }
}