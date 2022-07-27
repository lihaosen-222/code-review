import { request } from 'umi'

export async function getMergeRequestChange (){
  return request('/api/getSingleMRChanges')
}

export async function getMergeRequestDiscuss (){
  return request('/api/listProjectMergeRequestDiscussionItems')
}

export async function createNewMergeRequestThread (data: any){
  return request('/api/createNewMergeRequestThread', {
    method: 'post',
    data
  })
}

export async function addNoteToExistingThread (data: any){
  return request('/api/addNoteToExistingThread', {
    method: 'post',
    data
  })
}

export async function mergeAMergeRequest (data: any){
  return request('/api/mergeAMergeRequest', {
    method: 'put',
    data
  })
}


