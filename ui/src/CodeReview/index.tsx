/* eslint-disable react/jsx-key */
import React, { useMemo, useState } from 'react';
import { getTitle, getThreads } from './uitls';
import { parseDiff, Diff, Hunk } from 'react-diff-view';
import 'react-diff-view/style/index.css'
import styles from './index.less';
import { Empty } from 'antd';
import getWidgets from './widgets';
import { CodeReiewProps, NewThread, GutterChange } from './data';


export default (props: CodeReiewProps) => {
  const { changes, discussions, onReply, onComment } = props;
  const threads = useMemo(() => getThreads(discussions), [discussions]);
  const [newThread, setNewThread] = useState<NewThread>({isShow: false});

  const render = changes?.map((item) => {
    const { new_path: newPath, old_path: oldPath, diff: diffText } = item;
    const files = parseDiff(diffText);
    const title = getTitle(newPath, oldPath);

    const gutterEvents = {
      onClick({ change }: GutterChange) {
        const {
          lineNumber,
          oldLineNumber,
          newLineNumber,
          isNormal,
          isDelete,
          isInsert
        } = change;

        let newLine: number | undefined;
        let oldLine: number | undefined;

        if (isInsert) {
          newLine = lineNumber;
        } else if (isDelete) {
          oldLine = lineNumber;
        } else if (isNormal) {
          newLine = newLineNumber;
          oldLine = oldLineNumber;
        }

        setNewThread({
          isShow: true,
          newPath,
          oldPath,
          newLine,
          oldLine,
        });
      },
    };

    return (
      <div key={title} className={styles.file}>
        <h4 className='title'>{title}</h4>
        {
          files.map(({ type, hunks }: any, i: number) => {
            const widgets =
              getWidgets({ newThread, oldPath, newPath, threads, onReply, onComment })

            return (
              <Diff key={i} widgets={widgets} viewType="unified" diffType={type} hunks={hunks}>
                {(fileHunks: any[]) => {
                  const noContent = !fileHunks?.length
                  return noContent ? <EmptyHunk/> : fileHunks.map((hunk) =>
                    [<Hunk hunk={hunk} gutterEvents={gutterEvents} />])
                }}
              </Diff>
            )
          })
        }
      </div>
    );
  });

  return <>{render}</>;
};


function EmptyHunk() {
  return (
    <tbody>
      <tr>
        <td colSpan={3}>
          <Empty />
        </td>
      </tr>
    </tbody>
  )
}
