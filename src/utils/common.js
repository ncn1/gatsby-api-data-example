const naExpand = string => {
        if (string === 'n/a') {
            return ('not applicable')
        } else {
            return (string)
        }
    }
;

export {naExpand};
