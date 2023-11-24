
import { render } from "react-dom";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-sql";
import "ace-builds/src-noconflict/theme-cloud9_night";
import "ace-builds/src-noconflict/ext-language_tools";
import { useState } from "react";

const Ide = ({setSqlQuery}) => {

    function onChange(Query) {
        setSqlQuery(Query);
    }
    return (
        <div className="border-e">

            <AceEditor
             
                mode="sql"
                theme="cloud9_night"
                onChange={onChange}
                fontSize={20}
                showPrintMargin={false}
                showGutter={true}
                highlightActiveLine={false}
                width="100%"
                height="54vh"
                value={`select * from PRODUCTS;`}
                setOptions={{
                    enableLiveAutocompletion: true,
                    enableSnippets: false,
                    showLineNumbers: false,
                }}
                />
                </div>
    );
}

export default Ide;