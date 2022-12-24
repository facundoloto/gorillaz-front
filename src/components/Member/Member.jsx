import { CardApi } from "../CardApi/CardApi.jsx";

export default function Member(){
    return CardApi('https://gorillazapi.onrender.com/v1/member');
}