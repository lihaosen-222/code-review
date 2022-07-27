import './index.less';
import { useRequest } from 'ahooks'
import {
  getMergeRequestChange,
  getMergeRequestDiscuss,
  createNewMergeRequestThread,
  addNoteToExistingThread,
  mergeAMergeRequest,
} from './service'

import CodeReview from '@/CodeReview'
import { Button, message } from 'antd'

export default () => {
  const { data: changeData } = useRequest(async () =>{
    const { data = {} } = await getMergeRequestChange()
    const { changes, diff_refs: diffRefs } = data
    return { changes, diffRefs }
  })

  const { changes, diffRefs } = changeData || {}

  const { data: discussions, refresh } = useRequest(async ()=>{
    const { data = {} } = await getMergeRequestDiscuss()
    console.log('data', data)
    return data
  })

  const { run: commitMerge, loading: commitMergeLoading } = useRequest(
    mergeAMergeRequest,
    {
      manual: true,
      onSuccess() {
        message.success('合并成功')
      },
    }
  )

  async function onComment({
    body,
    type,
    newPath,
    oldPath,
    newLine,
    oldLine,
  }: any) {
    const params = {
      ...diffRefs,
      body,
      'position[position_type]': type, // 目前仅支持 text 类型
      'position[new_path]': newPath,
      'position[old_path]': oldPath,
      'position[new_line]': newLine,
      'position[old_line]': oldLine,
    }
    await createNewMergeRequestThread(params)
    message.success('创建成功')
    refresh()
  }

  async function onReply({
    body,
    type,
    newPath,
    oldPath,
    newLine,
    oldLine,
  }: any) {
    const params = {
      ...diffRefs,
      body,
      'position[position_type]': type, // 目前仅支持 text 类型
      'position[new_path]': newPath,
      'position[old_path]': oldPath,
      'position[new_line]': newLine,
      'position[old_line]': oldLine,
    }
    await addNoteToExistingThread(params)
    message.success('创建成功')
    refresh()
  }

  return (
    <>
      {' '}
      <Button onClick={commitMerge} type="primary" loading={commitMergeLoading}>
        同意合并请求
      </Button>
      <CodeReview
        changes={changes}
        discussions={discussions}
        onComment={onComment}
        onReply={onReply}
      />
    </>
  )
}
