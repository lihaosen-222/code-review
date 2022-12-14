const Router = require('koa-router')
const bodyPaser = require('koa-bodyparser')

function routerInit(app) {
  const router = new Router()

  router.use(bodyPaser())

  router.get('/api/getSingleMRChanges', async (ctx) => {
    ctx.body = {
      subCode: 0,
      msg: 'success',
      code: 200,
      subMsg: null,
      data: {
        id: 19628,
        iid: 8,
        project_id: 1446,
        title: '含各种 diff 种类的测试合并请求',
        description: '',
        state: 'opened',
        created_at: '2022-06-20T10:57:52.830+08:00',
        updated_at: '2022-06-23T11:13:55.149+08:00',
        target_branch: 'lihaosenMergeTest2',
        source_branch: 'lihaosenMergeTest3',
        upvotes: 0,
        downvotes: 0,
        author: {
          id: 696,
          name: 'sx-9771',
          username: 'sx-9771',
          state: 'active',
          avatar_url:
            'https://gitlab05.dtdream.com/uploads/-/system/user/avatar/696/avatar.png',
          web_url: 'https://gitlab05.dtdream.com/sx-9771',
        },
        assignee: {
          id: 696,
          name: 'sx-9771',
          username: 'sx-9771',
          state: 'active',
          avatar_url:
            'https://gitlab05.dtdream.com/uploads/-/system/user/avatar/696/avatar.png',
          web_url: 'https://gitlab05.dtdream.com/sx-9771',
        },
        source_project_id: 1446,
        target_project_id: 1446,
        labels: [],
        work_in_progress: false,
        milestone: null,
        merge_when_pipeline_succeeds: false,
        merge_status: 'can_be_merged',
        sha: 'bf6bbcff03e1615728d7312dd1a24e34353b679b',
        merge_commit_sha: null,
        user_notes_count: 10,
        discussion_locked: null,
        should_remove_source_branch: null,
        force_remove_source_branch: false,
        web_url:
          'https://gitlab05.dtdream.com/DOP-CBB/scbb/dop-webapp/dtp-webapp/merge_requests/8',
        time_stats: {
          time_estimate: 0,
          total_time_spent: 0,
          human_time_estimate: null,
          human_total_time_spent: null,
        },
        subscribed: true,
        changes_count: '7',
        merged_by: null,
        merged_at: null,
        closed_by: null,
        closed_at: null,
        latest_build_started_at: null,
        latest_build_finished_at: null,
        first_deployed_to_production_at: null,
        pipeline: null,
        diff_refs: {
          base_sha: 'b01a7574d143584af3896251731896d81175dd17',
          head_sha: 'bf6bbcff03e1615728d7312dd1a24e34353b679b',
          start_sha: 'b01a7574d143584af3896251731896d81175dd17',
        },
        changes: [
          {
            old_path: 'README.md',
            new_path: 'README.md',
            a_mode: '100644',
            b_mode: '100644',
            new_file: false,
            renamed_file: false,
            deleted_file: false,
            diff: '--- a/README.md\n+++ b/README.md\n@@ -1,4 +1,4 @@\n DTP 代码管理\n \n insert\n-insert\n\\ No newline at end of file\n+add\n\\ No newline at end of file\n',
          },
          {
            old_path: 'about_logo.png',
            new_path: 'about_logo.png',
            a_mode: '0',
            b_mode: '100644',
            new_file: true,
            renamed_file: false,
            deleted_file: false,
            diff: 'Binary files /dev/null and b/about_logo.png differ\n',
          },
          {
            old_path: 'file1',
            new_path: 'file1',
            a_mode: '100644',
            b_mode: '100644',
            new_file: false,
            renamed_file: false,
            deleted_file: false,
            diff: '--- a/file1\n+++ b/file1\n@@ -1 +1,4 @@\n-正常的插入和删除\n\\ No newline at end of file\n+insert\n+insert\n+insert\n+insert\n\\ No newline at end of file\n',
          },
          {
            old_path: 'file2',
            new_path: 'file2',
            a_mode: '100644',
            b_mode: '100644',
            new_file: false,
            renamed_file: false,
            deleted_file: false,
            diff: '--- a/file2\n+++ b/file2\n@@ -1 +1,2 @@\n-第二个正常插入和删除的\n\\ No newline at end of file\n+第二个正常插入和删除的\n+重名的 diff\n\\ No newline at end of file\n',
          },
          {
            old_path: 'file3',
            new_path: 'file3',
            a_mode: '100644',
            b_mode: '0',
            new_file: false,
            renamed_file: false,
            deleted_file: true,
            diff: '--- a/file3\n+++ /dev/null\n@@ -1,2 +0,0 @@\n-直接删除该文件\n-file4 添加新文件（要输入点内容）\n\\ No newline at end of file\n',
          },
          {
            old_path: 'file4',
            new_path: 'file4',
            a_mode: '0',
            b_mode: '100644',
            new_file: true,
            renamed_file: false,
            deleted_file: false,
            diff: '--- /dev/null\n+++ b/file4\n@@ -0,0 +1,5 @@\n+insert\n+insert\n+insert\n+insert\n+insert\n\\ No newline at end of file\n',
          },
          {
            old_path: 'folder/file2',
            new_path: 'folder/file2',
            a_mode: '0',
            b_mode: '100644',
            new_file: true,
            renamed_file: false,
            deleted_file: false,
            diff: '--- /dev/null\n+++ b/folder/file2\n@@ -0,0 +1,2 @@\n+第二个正常插入和删除的\n+移动并修改？\n\\ No newline at end of file\n',
          },
          {
            old_path: 'folder2/file5',
            new_path: 'folder2/file5',
            a_mode: '0',
            b_mode: '100644',
            new_file: true,
            renamed_file: false,
            deleted_file: false,
            diff: '--- /dev/null\n+++ b/folder2/file5\n@@ -0,0 +1 @@\n+file5\n\\ No newline at end of file\n',
          },
        ],
      },
    }
  })
  router.get('/api/listProjectMergeRequestDiscussionItems', async (ctx) => {
    ctx.body = {
      subCode: 0,
      msg: 'success',
      code: 200,
      subMsg: null,
      data: [
        {
          id: '3cb583286f36443a4413c52434ca45e5ce3cbf9d',
          individual_note: false,
          notes: [
            {
              id: 51536,
              type: 'DiffNote',
              body: 'add 1',
              attachment: null,
              author: {
                id: 696,
                name: 'sx-9771',
                username: 'sx-9771',
                state: 'active',
                avatar_url:
                  'https://gitlab05.dtdream.com/uploads/-/system/user/avatar/696/avatar.png',
                web_url: 'https://gitlab05.dtdream.com/sx-9771',
              },
              created_at: '2022-06-20T13:52:43.042+08:00',
              updated_at: '2022-06-20T13:52:43.042+08:00',
              system: false,
              noteable_id: 19628,
              noteable_type: 'MergeRequest',
              position: {
                base_sha: 'b01a7574d143584af3896251731896d81175dd17',
                start_sha: 'b01a7574d143584af3896251731896d81175dd17',
                head_sha: 'bf6bbcff03e1615728d7312dd1a24e34353b679b',
                old_path: 'file1',
                new_path: 'file1',
                position_type: 'text',
                old_line: null,
                new_line: 1,
              },
              resolvable: true,
              resolved: false,
              resolved_by: null,
              noteable_iid: 8,
            },
          ],
        },
        {
          id: '29b3d23bfec40bcef76358ef6a07304f8c6140fe',
          individual_note: false,
          notes: [
            {
              id: 51537,
              type: 'DiffNote',
              body: 'delete 1',
              attachment: null,
              author: {
                id: 696,
                name: 'sx-9771',
                username: 'sx-9771',
                state: 'active',
                avatar_url:
                  'https://gitlab05.dtdream.com/uploads/-/system/user/avatar/696/avatar.png',
                web_url: 'https://gitlab05.dtdream.com/sx-9771',
              },
              created_at: '2022-06-20T13:53:49.766+08:00',
              updated_at: '2022-06-20T13:53:49.766+08:00',
              system: false,
              noteable_id: 19628,
              noteable_type: 'MergeRequest',
              position: {
                base_sha: 'b01a7574d143584af3896251731896d81175dd17',
                start_sha: 'b01a7574d143584af3896251731896d81175dd17',
                head_sha: 'bf6bbcff03e1615728d7312dd1a24e34353b679b',
                old_path: 'file1',
                new_path: 'file1',
                position_type: 'text',
                old_line: 1,
                new_line: null,
              },
              resolvable: true,
              resolved: false,
              resolved_by: null,
              noteable_iid: 8,
            },
            {
              id: 51546,
              type: 'DiffNote',
              body: 'delete 2',
              attachment: null,
              author: {
                id: 696,
                name: 'sx-9771',
                username: 'sx-9771',
                state: 'active',
                avatar_url:
                  'https://gitlab05.dtdream.com/uploads/-/system/user/avatar/696/avatar.png',
                web_url: 'https://gitlab05.dtdream.com/sx-9771',
              },
              created_at: '2022-06-20T14:51:20.313+08:00',
              updated_at: '2022-06-20T14:51:20.313+08:00',
              system: false,
              noteable_id: 19628,
              noteable_type: 'MergeRequest',
              position: {
                base_sha: 'b01a7574d143584af3896251731896d81175dd17',
                start_sha: 'b01a7574d143584af3896251731896d81175dd17',
                head_sha: 'bf6bbcff03e1615728d7312dd1a24e34353b679b',
                old_path: 'file1',
                new_path: 'file1',
                position_type: 'text',
                old_line: 1,
                new_line: null,
              },
              resolvable: true,
              resolved: false,
              resolved_by: null,
              noteable_iid: 8,
            },
          ],
        },
        {
          id: 'faeda69e98cf81c9eb96c5914aca8e6fe37b4b1a',
          individual_note: true,
          notes: [
            {
              id: 51542,
              type: null,
              body: 'added 1 commit\n\n<ul><li>1bb1a6ab - 更多 diff 种类</li></ul>\n\n[Compare with previous version](https://gitlab05.dtdream.com/DOP-CBB/scbb/dop-webapp/dtp-webapp/merge_requests/8/diffs?diff_id=22097&start_sha=a3c6981cc4e139637f8ece56158fd1f479772e52)',
              attachment: null,
              author: {
                id: 696,
                name: 'sx-9771',
                username: 'sx-9771',
                state: 'active',
                avatar_url:
                  'https://gitlab05.dtdream.com/uploads/-/system/user/avatar/696/avatar.png',
                web_url: 'https://gitlab05.dtdream.com/sx-9771',
              },
              created_at: '2022-06-20T14:20:07.331+08:00',
              updated_at: '2022-06-20T14:20:07.331+08:00',
              system: true,
              noteable_id: 19628,
              noteable_type: 'MergeRequest',
              resolvable: false,
              noteable_iid: 8,
            },
          ],
        },
        {
          id: 'e834a35b2a8d22202b01b838c96252e41f9c9c43',
          individual_note: false,
          notes: [
            {
              id: 51543,
              type: 'DiffNote',
              body: 'add 2',
              attachment: null,
              author: {
                id: 696,
                name: 'sx-9771',
                username: 'sx-9771',
                state: 'active',
                avatar_url:
                  'https://gitlab05.dtdream.com/uploads/-/system/user/avatar/696/avatar.png',
                web_url: 'https://gitlab05.dtdream.com/sx-9771',
              },
              created_at: '2022-06-20T14:24:52.721+08:00',
              updated_at: '2022-06-20T14:24:52.721+08:00',
              system: false,
              noteable_id: 19628,
              noteable_type: 'MergeRequest',
              position: {
                base_sha: 'b01a7574d143584af3896251731896d81175dd17',
                start_sha: 'b01a7574d143584af3896251731896d81175dd17',
                head_sha: 'bf6bbcff03e1615728d7312dd1a24e34353b679b',
                old_path: 'README.md',
                new_path: 'README.md',
                position_type: 'text',
                old_line: null,
                new_line: 4,
              },
              resolvable: true,
              resolved: false,
              resolved_by: null,
              noteable_iid: 8,
            },
          ],
        },
        {
          id: '73dc97ee6f5e25b0a596d494432b00933c839601',
          individual_note: true,
          notes: [
            {
              id: 51547,
              type: null,
              body: 'added 1 commit\n\n<ul><li>31c2a90c - 有移动的 diff 种类吗</li></ul>\n\n[Compare with previous version](https://gitlab05.dtdream.com/DOP-CBB/scbb/dop-webapp/dtp-webapp/merge_requests/8/diffs?diff_id=22099&start_sha=1bb1a6abc0e022eadde53ca8c524ff583e21ea87)',
              attachment: null,
              author: {
                id: 696,
                name: 'sx-9771',
                username: 'sx-9771',
                state: 'active',
                avatar_url:
                  'https://gitlab05.dtdream.com/uploads/-/system/user/avatar/696/avatar.png',
                web_url: 'https://gitlab05.dtdream.com/sx-9771',
              },
              created_at: '2022-06-20T15:03:29.059+08:00',
              updated_at: '2022-06-20T15:03:29.059+08:00',
              system: true,
              noteable_id: 19628,
              noteable_type: 'MergeRequest',
              resolvable: false,
              noteable_iid: 8,
            },
          ],
        },
        {
          id: 'be973d9474baf57901236ea62942b1665c913980',
          individual_note: true,
          notes: [
            {
              id: 51548,
              type: null,
              body: 'added 1 commit\n\n<ul><li>3164c965 - 移动并修改？</li></ul>\n\n[Compare with previous version](https://gitlab05.dtdream.com/DOP-CBB/scbb/dop-webapp/dtp-webapp/merge_requests/8/diffs?diff_id=22100&start_sha=31c2a90cade6b52686caebb2bef062269fab8d30)',
              attachment: null,
              author: {
                id: 696,
                name: 'sx-9771',
                username: 'sx-9771',
                state: 'active',
                avatar_url:
                  'https://gitlab05.dtdream.com/uploads/-/system/user/avatar/696/avatar.png',
                web_url: 'https://gitlab05.dtdream.com/sx-9771',
              },
              created_at: '2022-06-20T15:08:08.288+08:00',
              updated_at: '2022-06-20T15:08:08.288+08:00',
              system: true,
              noteable_id: 19628,
              noteable_type: 'MergeRequest',
              resolvable: false,
              noteable_iid: 8,
            },
          ],
        },
        {
          id: '8d0f32cae815fddb890974e985f0769a7ce00027',
          individual_note: true,
          notes: [
            {
              id: 51549,
              type: null,
              body: 'added 1 commit\n\n<ul><li>aa541508 - 重名的 diff ？</li></ul>\n\n[Compare with previous version](https://gitlab05.dtdream.com/DOP-CBB/scbb/dop-webapp/dtp-webapp/merge_requests/8/diffs?diff_id=22101&start_sha=3164c965003631016654579bad26630b86f13ce2)',
              attachment: null,
              author: {
                id: 696,
                name: 'sx-9771',
                username: 'sx-9771',
                state: 'active',
                avatar_url:
                  'https://gitlab05.dtdream.com/uploads/-/system/user/avatar/696/avatar.png',
                web_url: 'https://gitlab05.dtdream.com/sx-9771',
              },
              created_at: '2022-06-20T15:13:44.125+08:00',
              updated_at: '2022-06-20T15:13:44.125+08:00',
              system: true,
              noteable_id: 19628,
              noteable_type: 'MergeRequest',
              resolvable: false,
              noteable_iid: 8,
            },
          ],
        },
        {
          id: '6b003ea6dc82cd1557cced46ef37b8adb08d330d',
          individual_note: true,
          notes: [
            {
              id: 51550,
              type: null,
              body: 'added 1 commit\n\n<ul><li>bf6bbcff - 重名的 diff</li></ul>\n\n[Compare with previous version](https://gitlab05.dtdream.com/DOP-CBB/scbb/dop-webapp/dtp-webapp/merge_requests/8/diffs?diff_id=22102&start_sha=aa5415087aa4ef0cb21f42149e7702cbff4c2686)',
              attachment: null,
              author: {
                id: 696,
                name: 'sx-9771',
                username: 'sx-9771',
                state: 'active',
                avatar_url:
                  'https://gitlab05.dtdream.com/uploads/-/system/user/avatar/696/avatar.png',
                web_url: 'https://gitlab05.dtdream.com/sx-9771',
              },
              created_at: '2022-06-20T15:14:52.533+08:00',
              updated_at: '2022-06-20T15:14:52.533+08:00',
              system: true,
              noteable_id: 19628,
              noteable_type: 'MergeRequest',
              resolvable: false,
              noteable_iid: 8,
            },
          ],
        },
        {
          id: '2de59223f983ce0a58ec388db7fffb59bc554069',
          individual_note: false,
          notes: [
            {
              id: 51694,
              type: 'DiffNote',
              body: 'postman test',
              attachment: null,
              author: {
                id: 696,
                name: 'sx-9771',
                username: 'sx-9771',
                state: 'active',
                avatar_url:
                  'https://gitlab05.dtdream.com/uploads/-/system/user/avatar/696/avatar.png',
                web_url: 'https://gitlab05.dtdream.com/sx-9771',
              },
              created_at: '2022-06-21T14:18:23.919+08:00',
              updated_at: '2022-06-21T14:18:23.919+08:00',
              system: false,
              noteable_id: 19628,
              noteable_type: 'MergeRequest',
              position: {
                base_sha: 'b01a7574d143584af3896251731896d81175dd17',
                start_sha: 'b01a7574d143584af3896251731896d81175dd17',
                head_sha: 'bf6bbcff03e1615728d7312dd1a24e34353b679b',
                old_path: 'README.md',
                new_path: 'README.md',
                position_type: 'text',
                old_line: 1,
                new_line: 1,
              },
              resolvable: true,
              resolved: false,
              resolved_by: null,
              noteable_iid: 8,
            },
            {
              id: 51824,
              type: 'DiffNote',
              body: '111',
              attachment: null,
              author: {
                id: 696,
                name: 'sx-9771',
                username: 'sx-9771',
                state: 'active',
                avatar_url:
                  'https://gitlab05.dtdream.com/uploads/-/system/user/avatar/696/avatar.png',
                web_url: 'https://gitlab05.dtdream.com/sx-9771',
              },
              created_at: '2022-06-23T11:09:16.993+08:00',
              updated_at: '2022-06-23T11:09:16.993+08:00',
              system: false,
              noteable_id: 19628,
              noteable_type: 'MergeRequest',
              position: {
                base_sha: 'b01a7574d143584af3896251731896d81175dd17',
                start_sha: 'b01a7574d143584af3896251731896d81175dd17',
                head_sha: 'bf6bbcff03e1615728d7312dd1a24e34353b679b',
                old_path: 'README.md',
                new_path: 'README.md',
                position_type: 'text',
                old_line: 1,
                new_line: 1,
              },
              resolvable: true,
              resolved: false,
              resolved_by: null,
              noteable_iid: 8,
            },
          ],
        },
        {
          id: '60a37a96441fc6df084a9be7c7d69c01f1642e20',
          individual_note: false,
          notes: [
            {
              id: 51695,
              type: 'DiffNote',
              body: 'postman test',
              attachment: null,
              author: {
                id: 696,
                name: 'sx-9771',
                username: 'sx-9771',
                state: 'active',
                avatar_url:
                  'https://gitlab05.dtdream.com/uploads/-/system/user/avatar/696/avatar.png',
                web_url: 'https://gitlab05.dtdream.com/sx-9771',
              },
              created_at: '2022-06-21T14:31:24.235+08:00',
              updated_at: '2022-06-21T14:31:24.235+08:00',
              system: false,
              noteable_id: 19628,
              noteable_type: 'MergeRequest',
              position: {
                base_sha: 'b01a7574d143584af3896251731896d81175dd17',
                start_sha: 'b01a7574d143584af3896251731896d81175dd17',
                head_sha: 'bf6bbcff03e1615728d7312dd1a24e34353b679b',
                old_path: 'README.md',
                new_path: 'README.md',
                position_type: 'text',
                old_line: 4,
                new_line: null,
              },
              resolvable: true,
              resolved: false,
              resolved_by: null,
              noteable_iid: 8,
            },
          ],
        },
        {
          id: 'cf4206fb219e0374bfda1d7cb581cb1c7ff1c624',
          individual_note: false,
          notes: [
            {
              id: 51825,
              type: 'DiffNote',
              body: 'postman test',
              attachment: null,
              author: {
                id: 696,
                name: 'sx-9771',
                username: 'sx-9771',
                state: 'active',
                avatar_url:
                  'https://gitlab05.dtdream.com/uploads/-/system/user/avatar/696/avatar.png',
                web_url: 'https://gitlab05.dtdream.com/sx-9771',
              },
              created_at: '2022-06-23T11:09:57.303+08:00',
              updated_at: '2022-06-23T11:09:57.303+08:00',
              system: false,
              noteable_id: 19628,
              noteable_type: 'MergeRequest',
              position: {
                base_sha: 'b01a7574d143584af3896251731896d81175dd17',
                start_sha: 'b01a7574d143584af3896251731896d81175dd17',
                head_sha: 'bf6bbcff03e1615728d7312dd1a24e34353b679b',
                old_path: 'README.md',
                new_path: 'README.md',
                position_type: 'text',
                old_line: 4,
                new_line: null,
              },
              resolvable: true,
              resolved: false,
              resolved_by: null,
              noteable_iid: 8,
            },
            {
              id: 51826,
              type: 'DiffNote',
              body: 'postman test',
              attachment: null,
              author: {
                id: 696,
                name: 'sx-9771',
                username: 'sx-9771',
                state: 'active',
                avatar_url:
                  'https://gitlab05.dtdream.com/uploads/-/system/user/avatar/696/avatar.png',
                web_url: 'https://gitlab05.dtdream.com/sx-9771',
              },
              created_at: '2022-06-23T11:13:55.138+08:00',
              updated_at: '2022-06-23T11:13:55.138+08:00',
              system: false,
              noteable_id: 19628,
              noteable_type: 'MergeRequest',
              position: {
                base_sha: 'b01a7574d143584af3896251731896d81175dd17',
                start_sha: 'b01a7574d143584af3896251731896d81175dd17',
                head_sha: 'bf6bbcff03e1615728d7312dd1a24e34353b679b',
                old_path: 'README.md',
                new_path: 'README.md',
                position_type: 'text',
                old_line: 4,
                new_line: null,
              },
              resolvable: true,
              resolved: false,
              resolved_by: null,
              noteable_iid: 8,
            },
            {
              id: 51827,
              type: 'DiffNote',
              body: 'postman test 222',
              attachment: null,
              author: {
                id: 696,
                name: 'sx-9771',
                username: 'sx-9771',
                state: 'active',
                avatar_url:
                  'https://gitlab05.dtdream.com/uploads/-/system/user/avatar/696/avatar.png',
                web_url: 'https://gitlab05.dtdream.com/sx-9771',
              },
              created_at: '2022-06-23T11:14:11.738+08:00',
              updated_at: '2022-06-23T11:14:11.738+08:00',
              system: false,
              noteable_id: 19628,
              noteable_type: 'MergeRequest',
              position: {
                base_sha: 'b01a7574d143584af3896251731896d81175dd17',
                start_sha: 'b01a7574d143584af3896251731896d81175dd17',
                head_sha: 'bf6bbcff03e1615728d7312dd1a24e34353b679b',
                old_path: 'README.md',
                new_path: 'README.md',
                position_type: 'text',
                old_line: 4,
                new_line: null,
              },
              resolvable: true,
              resolved: false,
              resolved_by: null,
              noteable_iid: 8,
            },
          ],
        },
      ],
    }
  })

  router.post('/api/createNewMergeRequestThread', async (ctx) => {
    // win = JSON.parse(ctx.request.body.win);
    ctx.body = {
      subCode: 0,
      msg: 'success',
      code: 200,
      subMsg: null,
      data: 'sucess',
    }
  })
  router.post('/api/addNoteToExistingThread', async (ctx) => {
    ctx.body = {
      subCode: 0,
      msg: 'success',
      code: 200,
      subMsg: null,
      data: 'sucess',
    }
  })
  router.all('/api/mergeAMergeRequest', async (ctx) => {
    ctx.body = {
      subCode: 0,
      msg: 'success',
      code: 200,
      subMsg: null,
      data: 'sucess',
    }
  })
  app.use(router.routes()).use(router.allowedMethods())

}

module.exports = routerInit
