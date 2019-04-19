import { GUID_UPDATED, HELP_UPDATED, ARTICLE_UPDATED } from './type'
export function getGuid(page) {
  return (dispatch, getState) => {
    let { guid, auth } = getState()
    const url = `${host}collect/article/queryArticleList`
    _fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        currenPage: page || 1,
        pageSize: 30,
        typeCode: 'type_code_003'
      })
    }).then(res => {
      if (res.success == true || res.success == 'true') {
        dispatch({
          type: GUID_UPDATED,
          data: {
            page: page,
            total: res.totalRecord,
            list: page == 1 ? res.records : [...guid.list, ...res.records]
          }
        })
      }
    })

  }
}
export function getHelp(page) {
  return (dispatch, getState) => {
    let { help, auth } = getState()
    const url = `${host}collect/article/queryArticleList`
    _fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        currenPage: page || 1,
        pageSize: 30,
        typeCode: 'type_code_002'
      })
    }).then(res => {
      if (res.success == true || res.success == 'true') {
        dispatch({
          type: HELP_UPDATED,
          data: {
            page: page,
            total: res.totalRecord,
            list: page == 1 ? res.records : [...help.list, ...res.records]
          }
        })
      }
    })

  }
}
export function getArticle(id) {
  return (dispatch, getState) => {
    let { help, auth } = getState()
    const url = `${host}collect/article/queryOneArticle?articleId=${id}`
    _fetch(url, {
      method: 'POST'
    }).then(res => {
      if (res.result) {
        dispatch({
          type: ARTICLE_UPDATED,
          data: {
            id: res.result.articleId,
            title: res.result.articleTitle,
            content: res.result.content,
            typeName: res.result.typeName
          }
        })
      }
    })
  }
}