/* eslint-disable react/jsx-key */
import React from 'react'
import { getLineId, isShowNewThread } from './uitls'
import { ProForm, ProFormTextArea } from '@ant-design/pro-components'
import styles from './index.less'
import moment from 'moment'
import { GetWidgetsProps, Widgets } from './data'

const replySubmitter = {
  submitButtonProps: {
    size: 'small',
  },
  resetButtonProps: {
    style: {
      display: 'none', // 隐藏重置按钮
    },
  },
}

const commentSubmitter = {
  submitButtonProps: {
    size: 'small',
  },
  resetButtonProps: {
    size: 'small',
  },
}

// 按照规定的格式，添加相应的 DOM 到 widgets[lineId] 中
export default function getWidgets({
  newThread,
  oldPath,
  newPath,
  threads,
  onReply,
  onComment,
}: GetWidgetsProps) {
  const widgets: Widgets = {}
  const pathKey = `${oldPath}-${newPath}`
  const paths = threads[pathKey] || {}

  // 渲染每一行下的评论和回复
  Object.values(paths).forEach((line) => {
    const { oldLine, newLine, positionType: type, lineThreads } = line

    const lineRender = lineThreads?.map((thread) => {
      return (
        <ul className="thread">
          {thread?.map((note) => {
            const { body, created_at: createdAt, author } = note
            const { username, avatar_url: avatarUrl } = author
            return (
              <li className="comment">
                <img src={avatarUrl} className="avatar" alt="头像" />
                <span className="username">{username}</span>
                <span className="createTime">
                  {moment(createdAt).format('YYYY-MM-DD HH:mm:ss')}
                </span>
                <div className="body">{body}</div>
              </li>
            )
          })}
          <ProForm
            className="replyForm"
            onFinish={async ({ reply: body }) => {
              await onReply({ body, type, newPath, oldPath, newLine, oldLine })
            }}
            submitter={replySubmitter as any}
            autoFocusFirstInput={false}
          >
            <ProFormTextArea
              name="reply"
              fieldProps={{ rows: '1' } as any}
              placeholder="回复"
            />
          </ProForm>
        </ul>
      )
    })

    const lineId = getLineId(oldLine, newLine)
    widgets[lineId] = <div className={styles.discussion}>{lineRender}</div>
  })

  // 渲染每一行下的添加评论（newThread）
  if (isShowNewThread({ newThread, oldPath, newPath })) {
    const { oldLine, newLine } = newThread
    const lineId = getLineId(oldLine, newLine)
    if (!widgets[lineId]) widgets[lineId] = [] // 初始化

    widgets[lineId] = [
      widgets[lineId],
      <div className={styles.newThread}>
        <ProForm
          className="form"
          onFinish={async ({ reply: body }) => {
            await onComment({
              body,
              type: 'text',
              newPath,
              oldPath,
              newLine,
              oldLine,
            })
          }}
          submitter={commentSubmitter as any}
        >
          <ProFormTextArea name="comment" placeholder="添加评论" />
        </ProForm>
      </div>,
    ]
  }

  return widgets
}
