import { CardApi } from "../CardApi/CardApi.jsx";

export default function Member(){
    return CardApi('http://localhost:8000/apigorillaz/v1/member');
}