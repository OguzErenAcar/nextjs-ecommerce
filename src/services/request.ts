import { response } from "@/types/response"

function parseData({ data }: { data: Record<string, any> }) {
  const formData = new FormData()
  for (let [key, value] of Object.entries(data)) {
    formData.append(key, value)
  }
  return formData
}



type requestType = {
  url: string,
  data?: any
  method?: string,
  type?: string,
}

type optionsType = {
  method: string,
  body: any
  credentials: RequestCredentials | undefined, // http only cookie
  headers: HeadersInit | undefined
}


function request({ url, data = false, method = "GET", type = "FORM_DATA" }: requestType) {
  return new Promise(async (resolve, reject) => {

    const options: optionsType = {
      body: null,
      method: method,
      credentials: "include",
      headers: { "Content-Type": "application/json" }


    }
    if (data && method == "POST")
      options.body = JSON.stringify(data)


      const response = await fetch(url, options) 
      const result = await response.json()

      
      resolve({ ok: response.ok, status: response.status, body: result })

  })

}

export const post = (url: string, data: any) => request({ url, data, method: "POST" })
export const postJSON = (url: string, data: any) => request({ url, data, method: "POST", type: "JSON" })

export const get = (url: string) => request({ url })
export const getJSON = (url: string) => request({ url, data: false, method: "GET", type: "JSON" })


export const put = (url: string, data: any) => request({ url, data, method: "PUT" })
export const putJSON = (url: string, data: any) => request({ url, data, method: "PUT", type: "JSON" })


export const del = (url: string) => request({ url, data: false, method: "DELETE" })
export const delJSON = (url: string) => request({ url, data: false, method: "DELETE", type: "JSON" })