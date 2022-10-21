interface RequestBody {
  username?: string;
  password1?: string;
  password2?: string;
  credit_card_no?: number;
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

  static async get(url: string): Promise<JSON> {
    return await (await this.httpFetch('GET', url)).json();
  }

  static async post(url: string, body?: RequestBody): Promise<JSON> {
    return await (await this.httpFetch('POST', url, body)).json();
  }
}

export default HTTP;

// results = await axios.post(
//   'http://127.0.0.1:8000/api/v1/auth/signup',
//   {
//     username: username,
//     password1: password1,
//     password2: password2,
//     credit_card_no: creditCardNo,
//   },
//   {
//     headers: {
//       'X-CSRFToken': csrfToken('csrftoken'),
//       // 'Access-Control-Allow-Origin': '*',
//       // 'Access-Control-Allow-Headers': '*',
//     },
//   }
// );

// (async () => {
//   results = await fetch('http://127.0.0.1:8000/api/v1/auth/login', {
//     method: 'POST',
//     body: JSON.stringify({
//       username: username,
//       password1: password1,
//       password2: password2,
//       credit_card_no: creditCardNo,
//     }),
//   });

//   const res = await results.json();
//   console.log(res);
// })();
