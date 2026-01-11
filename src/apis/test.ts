import httpInstance from "@/utils/http.ts";

export function getTest() {
  return httpInstance.get('/test')
}
