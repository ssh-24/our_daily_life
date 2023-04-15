/* eslint-disable*/

// 컬렉션에 접근하여 데이터를 불러오는 기능을 위한 훅
// 메인화면 외에 사용
import { appFireStore } from "../firebase/config"
import { useEffect, useState } from "react"
import { onSnapshot,collection,query,where,orderBy } from "firebase/firestore";

export const useCollectionDtl = (transaction, myQuery, order="") => { // myQuery: 파이어스토어 쿼리 사용을 위한 파라미터

    // documents 데이터 관리, error 관리
    const [documents, setDocuments] = useState(null);
    const [error, setError] = useState(null);

    // 💛 collection에 변화가 생길때마다 실행합니다. 때문에 항상 최신의 컬랙션 상태를 반환 받을 수 있습니다.
    useEffect(() => {
        let q;
        if(order.length>0){
            q = query(collection(appFireStore, transaction),where(...myQuery),orderBy("createdTime","desc"));
        }else{
            q = query(collection(appFireStore, transaction),where(...myQuery));
        }

        // onSnapshot: 가장 최근 컬랙션의 내용 반환 
        // unsubscribe: 데이터 수신을 중단(데이터 오는거 기다릴 필요가 없을때 사용.)
        const unsubscribe = onSnapshot(myQuery ? q : (collection(appFireStore, transaction)),
            
            // 응답받은 컬랙션을 snapshot에 저장
            (snapshot) => {
                let result = [];
                // 배열형태로 저장되어있음 => forEach 사용
                snapshot.docs.forEach((doc) => {
                    // document 데이터랑 id 값 push 해주기
                    result.push({ ...doc.data(), id: doc.id });
                })

                setDocuments(result);
                setError(null);
            },
            (error) => {
                setError(error.message);
            });
            
        //💛 외부에서 데이터를 구독하는 경우 clean-up 함수는 useEffect훅을 사용하는 컴포넌트가 마운트 해제될때 실행되어 구독을 종료하게 됩니다.
        return unsubscribe; // clean-up 함수

    }, [collection])// 매번 실행될 필요가 없고, 컬랙션 변화가 
    return { documents, error }
}