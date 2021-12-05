import statusCode from '../enum/httpStatus.js';

class RecommendationError extends Error {
  constructor(message, httpStatus) {
    super(message);
    this.name = 'RecommendationError';
    this.statusCode = statusCode[httpStatus] || 400;
    // TO-DO rever essa gambiarra da zorra
  }
}

export default RecommendationError;
