
StringConstants=()=>{
    
    //fetch and store here from local stroge 
    const lang="HINDI"

    if(lang===AppConstants.HINDI.lang){
        return AppConstants.HINDI;
    }else if(lang===AppConstants.GERMAN.lang){
        return AppConstants.GERMAN;
    }else {
        return AppConstants.ENGLISH;
    } 
    
}

const AppConstants = {

    ENGLISH: {
        lang:"ENGLISH",
        hello: 'Hello',
        welcome: 'Welcome',
    },
    HINDI: {
        lang:"HINDI",
        hello: 'नमस्ते',
        welcome: 'स्वागत हे',
    },
    GERMAN: {
        lang:"GERMAN",
        hello: 'Hallo',
        welcome: 'herzlich willkommen',
    }
};

var localConstants = StringConstants();
export default localConstants;


