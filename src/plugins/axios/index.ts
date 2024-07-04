import axios, { type InternalAxiosRequestConfig, type AxiosInstance, type AxiosError } from 'axios'
import { appConfig } from '@/app/configs'

const httpClient: AxiosInstance = axios.create({
  baseURL: appConfig.apiBaseUrl,
  headers: {
    'Content-Type': 'application/json'
  }
})

httpClient.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  return config
})

httpClient.interceptors.response.use(undefined, (error: AxiosError<{ message?: string }>) => {
  return Promise.reject(error)
})

export default httpClient
