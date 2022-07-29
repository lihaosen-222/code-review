import { ReactNode } from "react"

export interface Change {
  old_path: string,
  new_path: string,
  diff: string,
}

export interface Discussion {
  notes: Note[]
}

interface Note {
  id: number
  body: string
  type: string
  position: Position
  created_at: string
  author: {
    username: string
    avatar_url: string
  }
}

interface Position {
  base_sha: string
  start_sha: string
  head_sha: string
  old_path: string
  new_path: string
  old_line: number
  new_line: number
  position_type: string
}

export interface CodeReiewProps {
  changes: Change[];
  discussions: Discussion[];
  onComment: (params: any) => Promise<any>
  onReply: (params: any) => Promise<any>;
}

export interface NewThread {
  isShow: boolean;
  oldPath?: string;
  newPath?: string;
  oldLine?: number;
  newLine?: number;
}

export interface GutterChange {
  change: {
    lineNumber?: number,
    oldLineNumber?: number,
    newLineNumber?: number,
    isNormal?: boolean,
    isDelete?: boolean,
    isInsert?: boolean,
  }
}

export interface GetWidgetsProps {
  newThread: NewThread
  oldPath: string
  newPath: string
  threads: Threads
  onReply: (params: any) => Promise<any>
  onComment: (params: any) => Promise<any>
}


export type Threads = Record<string, Record<string, {
  oldLine: number
  newLine: number
  positionType: string
  lineThreads: Note[][],
}>>;

export type Widgets = Record<string, ReactNode | ReactNode[]>

