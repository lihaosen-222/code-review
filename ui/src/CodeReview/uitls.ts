import { Discussion, Threads, NewThread } from "./data";

export function getTitle(newPath: string, oldPath: string) {
  if (newPath === oldPath) return newPath;
  return `${oldPath} → ${newPath}`;
}

export function getLineId(oldLine?: number, newLine?: number) {
  if (!oldLine && newLine) return `I${newLine}`;
  if (oldLine && !newLine) return `D${oldLine}`;
  return `N${oldLine}`;
}

export function isShowNewThread({newThread, oldPath, newPath}: {
  newThread: NewThread
  oldPath: string
  newPath: string
}){
  const { isShow, oldPath: commentOldPath, newPath: commentNewPath } = newThread;
  return isShow && commentOldPath === oldPath && commentNewPath === newPath
}

// discussions 是 thread 划分，目标数据是根据 line 划分
export function getThreads(discussions: Discussion[]) {
  const threads: Threads = {}

  discussions?.forEach((discussion) => {
    const { notes } = discussion;
    if (!notes?.length) return;

    // 一行 diff 可有多条 thread，同一条 thread 的 path 和 line 应该是一样的
    if (notes[0].type === 'DiffNote') {
      const {
        old_path: oldPath,
        new_path: newPath,
        old_line: oldLine,
        new_line: newLine,
        position_type: positionType,
      } = notes[0].position;

      const pathKey = `${oldPath}-${newPath}`
      const lineKey = `${oldLine}-${newLine}`

      if(!threads[pathKey]) threads[pathKey] = {}
      const paths = threads[pathKey]

      if (!paths[lineKey]) {
        paths[lineKey] = {
          oldLine,
          newLine,
          positionType,
          lineThreads: [],
        }
      }
      const { lineThreads } = paths[lineKey];
      lineThreads.push(notes);
    }
  });

  return threads;
}
