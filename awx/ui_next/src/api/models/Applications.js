import Base from '../Base';

class Applications extends Base {
  constructor(http) {
    super(http);
    this.baseUrl = '/api/v2/applications/';
  }

  readTokens(appId, params) {
    return this.http.get(`${this.baseUrl}${appId}/tokens/`, {
      params,
    });
  }
}

export default Applications;
