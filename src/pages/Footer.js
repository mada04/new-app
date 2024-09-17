import ChildCareIcon from '@mui/icons-material/ChildCare';
export default function Footer() {
    return (
        <section className="p-10 bg-purple-500 bg-opacity-30 flex justify-center" 
        // style={{
        //     position: "fixed",
        //     left: "0",
        //     bottom: "0",
        //     width: " 100%"
        // }}
        >
            <p className="font-bold text-purple-700 text-opacity-30">
               Veniti la gradinita noastra!
               <ChildCareIcon/>
            </p>
        </section>
    )
}