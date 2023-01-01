/* eslint-disable*/
// 컬렉션을 만들고 데이터를 넘겨주는 작업을 위한 훅
import { useReducer,useState } from "react"
import { appFireStore, timestamp, storage } from "../firebase/config"
import { addDoc,updateDoc, deleteDoc,doc, collection } from "firebase/firestore"
import { ref, uploadBytesResumable,getDownloadURL } from "firebase/storage";
import  {GetCurDayTime ,GetUniqueNum }  from "../utils/DateUtil.js"

// 우리가 받을 응답을 저장할 객체 (객체이기 때문에 리듀서로 관리)
// 상태를 관리할 때 error나 isPending을 useReducer로 한번에 관리

/**
 * document : 파이어스토어에 document의 생성을 요청하면 우리가 생성한 document를 반환
 *      파이어스토어의 데이터 저장 단위
 * isPending: 통신중인지 아닌지 상태
 * success : 요청에 대한 응답의 성공 유무
 */
const initState = {
    document: null,
    isPending: false,
    error: null,
    success: false
}

// 전달 받는 action에 따른 state 업데이트
const storeReducer = (state, action) => {
    /**case 마다 데이터가 다 달라서 spread operator 안쓰고 그냥 적음... */
    switch (action.type) {
        case 'isPending':
            return { isPending: true, document: null,            success: false, error: null }
        case 'addDoc':
            return { isPending: false, document: action.payload, success: true,  error: null }
        case 'editDoc':
            return { isPending: false, document: action.payload, success: true,  error: null }
        case 'deleteDoc':
            return { isPending: false, document: action.payload, success: true,  error: null }
        case 'error':
            return { isPending: false, document: null,           success: false, error: action.payload }
        default:
            return state
    }
}

// transaction: 우리가 데이터를 저장할 컬렉션(폴더)
export const useFirestore = (transaction) => {

    // response에 요청에 대한 firestore 의 응답 저장
    // 저장되는 데이터 === 저장 성공 또는 요청한 문서 데이터(객체)
    const [response, dispatch] = useReducer(storeReducer, initState);
    const [imgUrl,setImgUrl] = useState([]);
    // colRef : 만들 컬랙션의 참조 (컬랙션 이름)
		// 원하는 컬렉션의 참조를 인자로 보내주면 파이어스토어가 자동으로 해당 컬렉션을 생성해줌 
    const colRef = collection(appFireStore, transaction);

      // 컬렉션에 문서를 저장(이미지 저장 시)
      const addDocument = async (doc,pic) => {

        // 시간 저장(order by 용)
        const createdTime = timestamp.fromDate(new Date());
        const createdDate = GetCurDayTime('/',':');

        // 유일키 저장
        const createdUqe = GetUniqueNum();

        // 이미지 업로드 경로 저장
        const storageRef = ref(storage, 'images/'+pic.name );
        const uploadTask = uploadBytesResumable(storageRef, pic);


        dispatch({ type: "isPending" });
        try {

            /*===============================================
             * 이미지 저장
             *===================================================*/

            uploadTask.on('state_changed', 
            (snapshot) => {
                null
            }, 
            (error) => {
                console.error('실패사유는', error);
            }, 
            () => {
              getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                
                console.log('업로드된 경로는', downloadURL);
                /*===============================================
                * 데이터 저장
                *===================================================*/
                // docRef : 참조(컬랙션 이름)
                // addDoc : 컬렉션에 문서를 추가
                const docRef = addDoc(colRef,{ ...doc, createdTime, createdDate,createdUqe, downloadURL});
                console.log(docRef);

                dispatch({ type: 'addDoc', payload: docRef });
                console.log('저장완료');               
              });
            }
          );

        } catch (error) {
            dispatch({ type: 'error', payload: error.message });
        }

    }

    // 컬렉션에 문서를 저장(댓글 저장)
    const addComment = async (doc) => {

        // 시간 저장(order by 용)
        const createdTime = timestamp.fromDate(new Date());
        const createdDate = GetCurDayTime('/',':');

        // 유일키 저장
        const createdUqe = GetUniqueNum();


        dispatch({ type: "isPending" });
        try {

                /*===============================================
                * 데이터 저장
                *===================================================*/
                // docRef : 참조(컬랙션 이름)
                // addDoc : 컬렉션에 문서를 추가
                const docRef = addDoc(colRef,{ ...doc, createdTime, createdDate,createdUqe});
                console.log(docRef);

                dispatch({ type: 'addDoc', payload: docRef });
                console.log('저장완료');               


        } catch (error) {
            dispatch({ type: 'error', payload: error.message });
        }

    }

    // 컬렉션에서 문서를 삭제
    const deleteDocument = async (id) => {

        dispatch({ type: "isPending" });
        try {
            const docRef = await deleteDoc(doc(colRef,id));
            dispatch({ type: 'deleteDoc', payload: docRef });
        } catch (error) {
            dispatch({ type: 'error', payload: error.message });
        }
    }

    // 컬렉션에서 문서를 수정
    const editDocument = async (documents,id) => {
        dispatch({ type: "isPending" });
        
        // const 임시 = doc(appFireStore,'diary',id);

        try {
            const createdTime = timestamp.fromDate(new Date());
            const createdDate = GetCurDayTime('/',':');

            // docRef : 참조(컬랙션 이름)
            // updateDoc : 컬렉션에 있는 문서 수정
            const docRef = await updateDoc(doc(colRef,id),{ ...documents, createdTime,createdDate});
            dispatch({ type: 'editDoc', payload: docRef });

        } catch (error) {
            dispatch({ type: 'error', payload: error.message });
        }
    }
    return { addDocument,addComment, deleteDocument, editDocument, response }

}