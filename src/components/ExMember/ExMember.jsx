import { CardApi } from "../CardApi/CardApi.jsx";

export default function ExMember(){
    return CardApi('http://localhost:8000/apigorillaz/v1/exmember');
}