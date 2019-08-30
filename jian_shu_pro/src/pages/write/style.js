import styled from  'styled-components';

export const WriterWrapper = styled.div`
position:absolute;
top:0;
left:0;
bottom:0;
right:0;
background:#eee;

` 
export const WriterLeft= styled.div`
float:left;
width:16.66666667%;
height:100%;
background:#404040;
color:#f2f2f2;
`
export const WriterRight = styled.div`
float:right;
display:flex;
width:83.3333%;
height:100%;
background:#00ffff;
`


export const BackButton = styled.div`
`

export const AddWrapper = styled.div`
`

export const CollectWrapper =styled.div`
`

export const CollectItem = styled.span`
`

export const ArticleWrapper = styled.div`
width:35%;
height:100%;
background:#fff;
overflow-y: scroll;
`

export const ArticleAdd = styled.div``

export const EditorWrapper = styled.div`
position:relative;
width:70%;
height:100%;
background:#eee;
overflow-y:scroll;
.my-component{
  width:100%;
  overflow:hidden;
}
`