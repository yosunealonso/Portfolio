import { computed } from "vue"
import { works } from "@/data/works"

export function useWorks() {

  const workList = computed(() => works)

  function getWorkById(id: string) {
    return works.find(work => work.id === Number(id))
  }

  return {
    workList,
    getWorkById
  }

}