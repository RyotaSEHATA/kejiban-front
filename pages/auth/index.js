import { withSessionSsr } from "../../lib/withSession";

const index = (props) => {
    return (
        <div>
            <p>{props.user.u_id}</p>
            <p>{props.user.u_name}</p>
        </div>
    );
}

export default index;

export const getServerSideProps = withSessionSsr(
    async function getServerSideProps({ req }){
        const user = req.session.user;

        if ( (user.u_id == undefined || user.u_id == '') && ( user.u_name == undefined || user.u_name == '') ) {
            // 本当はここでリダイレクトさせる
            return {
                notFound: true,
            };
        }else{
            return {
                props:{
                    user: user,
                }
            };
        }
    }

) 