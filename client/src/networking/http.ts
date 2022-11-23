export interface RequestBody {
  userId?: string;
  bookingDate?: string;
}

class HTTP {
  private static async httpFetch(method: 'GET' | 'POST', url: string, body?: RequestBody): Promise<Response> {
    return await fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
  }

  static async get(url: string): Promise<Response> {
    return await this.httpFetch('GET', url);
  }

  static async post(url: string, body?: RequestBody): Promise<Response> {
    return await this.httpFetch('POST', url, body);
  }
}

export default HTTP;
