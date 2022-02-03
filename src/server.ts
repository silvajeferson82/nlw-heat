import { serverHttp } from "./app";

serverHttp.listen(4000, () => 
    console.log(`🚀 Server ready at: http://localhost:4000`)
);