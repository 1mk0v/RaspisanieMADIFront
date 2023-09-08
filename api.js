
class Api {

    _getResponse (res) {
        return res.ok ? res.json(): Promise.reject()
    }

    constructor() {
        this.baseURL = 'http://127.0.0.1:8000',
        this.headers = {
            "content-type": "application/json"
        }
    }

    async getGroups() {
        let url = `${this.baseURL}/`;
        const res = await fetch(url);
        return this._getResponse(res);
    }

    async addTerminals(settings,data) {
        let url = `${this.baseURL}/${settings.front.toLowerCase()}/add`;
        const res = await fetch(url, {
            method: "post", 
            headers: this.headers,
            body: JSON.stringify(data)
        })
        return this._getResponse(res)
    }

    async deleteTerminal(settings, tid) {
        let url = `${this.baseURL}/${settings.front.toLowerCase()}/delete/${tid}`;
        const res = await fetch(url, {
            method:"delete",
            headers: this.headers
        })
        return this._getResponse(res)
        
    }

    async updateTerminal(settings, data, tid) {
        let url = `${this.baseURL}/${settings.front.toLowerCase()}/change/${tid}`;
        const res = await fetch(url, {
            method:"put",
            headers:this.headers,
            body: JSON.stringify(data)
        })
        
        return this._getResponse(res)
    }

}

export let api = new Api()


