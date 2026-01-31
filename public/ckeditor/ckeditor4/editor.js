var selectedTheme = null;
var config = {
    "autoOpen": false,
    "resizable": false,
    "modal": true,
    "width": window.innerWidth > 1000 ? 900 : window.innerWidth*0.9,
    "height": "auto",
    "show": {
        "effect": "fade",
        "duration": 100
    },
    "hide": {
        "effect": "fade",
        "duration": 100
    },
    "appendTo": '.main'
};

var blockTemplate = (index, content, type, puzzles) => {
    if(type === "asset"){
        type = "text";
    }

    var id = 'block-'+type+'-'+index+'-'+Date.now();

    return`
<div class="building-block" data-content-type="${type}" id="${id}" data-puzzles="${puzzles.join(",")}">
    ${content}
    <div class="block-config">
    ${((window.endPoint == "team")) ? `<button type="button" class="block-config-button config-btn" title="${window.i18n.setupVisualization}"><span class="material-icons">settings</span></button>`: ''}
    <button type="button" class="block-config-button reorder-btn" title="${window.i18n.reorder}"><span class="material-icons">swap_vert</span></button>
    <button type="button" class="block-config-button delete-btn" title="${window.i18n.delete}"><span class="material-icons">delete</span></button>
        <div class="overlay-trigger" data-id="${id}">
                <p>${window.i18n.areYouSureDelete}</p>
                <button class="deleteButton" type="button" onclick="overlayTrigger('${id}', true)">${window.cancel}</button>
                <button class="acceptButton" type="button" onclick="deleteDef('${id}')">${window.accept}</button>
            </form>
        </div>
    </div>
</div>
`;}

var textEditorTemplate = (id, text) => `<div class="editor-wrapper
${((window.endPoint === 'indications') || (window.endPoint === 'after')) ? 'indications' : '' }">
    <div id="${id}" name="${id}" class="editor" spellcheck="false">${text}</div>
</div>`;

var rankingTemplate = ()=>`<div class="editor">
    <ranking>
        <div class="ranking-table table" style="height: 229px; ">
            <div class="ranking-row ranking-header table-primary" style="top: 0px;" >
                <div class="ranking-pos">#</div>
                <div class="ranking-team">${window.i18n.Team}</div>
                <div class="ranking-members">${window.i18n.Members}</div>
                <div class="ranking-res">${window.i18n.Progress}</div>
                <div class="ranking-time">${window.i18n.Time}</div>
            </div>
            <div class="ranking-row " style="top: 75px;">
                <div class="ranking-pos">1</div>
                <div class="ranking-team">${window.i18n.Team} 1</div>
                <div class="ranking-members">${window.i18n.Student} A, ${window.i18n.Student} B</div>
                <div class="ranking-res">3/3</div>
                <div class="ranking-time">1h 2min</div>
            </div>
            <div class="ranking-row " style="top: 150px;">
                <div class="ranking-pos">2</div>
                <div class="ranking-team">${window.i18n.Team} 2</div>
                <div class="ranking-members">${window.i18n.Student} C, ${window.i18n.Student} D</div>
                <div class="ranking-res">2/3</div>
                <div class="ranking-time">---</div>
            </div>
        </div>
    </ranking>
</div>`

var reusablePuzzleTemplate = (id, url, width = 100, height = "auto", align = "center", ratio = "16/9", heightIframe = "300") => `<div class="webappfull-block reusable-puzzle-block" style="width:100%;height:auto;text-align:${align};">
<div class="config-size-webappfull">
    <div>
        <label>${window.i18n.width}</label>
        <input type="number" class="webappfullWidth" placeholder="${window.i18n.width}" value="${width}"% onChange="resizeWebappfullWidth(this)" max="100" min="0"> <span class="units">%</span>
    </div>
    <div class="alignment-group">
      <div class="alignment-option">
        <input type="radio" name="webappfull-alignment-${id}" id="webappfull-align-left-${id}" class="webappfull-align" value="left" ${align === "left" ? "checked" : ""} onchange="alignWebappfull(this)">
        <label for="webappfull-align-left-${id}">
          <span class="material-icons">format_align_left</span>
          ${window.i18n.Left}
        </label>
      </div>
      <div class="alignment-option">
        <input type="radio" name="webappfull-alignment-${id}" id="webappfull-align-center-${id}" class="webappfull-align" value="center" ${align === "center" ? "checked" : ""} onchange="alignWebappfull(this)">
        <label for="webappfull-align-center-${id}">
          <span class="material-icons">format_align_center</span>
          ${window.i18n.Center}
        </label>
      </div>
      <div class="alignment-option">
        <input type="radio" name="webappfull-alignment-${id}" id="webappfull-align-right-${id}" class="webappfull-align" value="right" ${align === "right" ? "checked" : ""} onchange="alignWebappfull(this)">
        <label for="webappfull-align-right-${id}">
          <span class="material-icons">format_align_right</span>
          ${window.i18n.Right}
        </label>
      </div>
    </div>
    <label class="aspectRatioLabel">${window.i18n.aspectRatio}</label>
    <select class="webappfullAspectRatioSelect dark" onchange="onChangeAspectRatioWebappfull(this)">
      <option class="ratio-option" value="4/3" ${ratio === "4/3" ? "selected=selected" : null}>
          4/3
      </option>
      <option class="ratio-option" value="16/9"  ${ratio === "16/9" ? "selected=selected" : null}>
          16/9
      </option>

      <option class="ratio-option" value="" ${ratio === "" ? "selected=selected" : null} >
        Auto
      </option>
    </select>
    <span class="webappfullHeightTitle" style="${ratio !== "" ? "display:none" : "display:block"};padding:0px 10px">${window.i18n.height}</span>
    <input class="webappfullHeightInput dark" type="number" style="${ratio !== "" ? "display:none" : "display:block"}" onchange="changeWebappfullHeight(this)" min="100" max="3000" value="${heightIframe ? heightIframe : 300 }"/>
    <span class="webappfullHeightPx" style="display:none;padding:0px 10px">px</span>
</div>
<iframe class="webappfullIframe reusablePuzzleIframe" src="${url}" style="width:${width}%;height:${ratio === "" ? heightIframe + "px" : height};border:none;max-width:1500px; aspect-ratio:${ratio}" >
</iframe>
</div>`;

var sceneTemplate = (id, url, width = 100, height = "auto", align = "center", ratio = "4/3", heightIframe = "600") => `<div class="webappfull-block scene-block" style="width:100%;height:auto;text-align:${align};">
<div class="config-size-webappfull">
    <div>
        <label>${window.i18n.width}</label>
        <input type="number" class="webappfullWidth" placeholder="${window.i18n.width}" value="${width}"% onChange="resizeWebappfullWidth(this)" max="100" min="0"> <span class="units">%</span>
    </div>
    <div class="alignment-group">
      <div class="alignment-option">
        <input type="radio" name="webappfull-alignment-${id}" id="webappfull-align-left-${id}" class="webappfull-align" value="left" ${align === "left" ? "checked" : ""} onchange="alignWebappfull(this)">
        <label for="webappfull-align-left-${id}">
          <span class="material-icons">format_align_left</span>
          ${window.i18n.Left}
        </label>
      </div>
      <div class="alignment-option">
        <input type="radio" name="webappfull-alignment-${id}" id="webappfull-align-center-${id}" class="webappfull-align" value="center" ${align === "center" ? "checked" : ""} onchange="alignWebappfull(this)">
        <label for="webappfull-align-center-${id}">
          <span class="material-icons">format_align_center</span>
          ${window.i18n.Center}
        </label>
      </div>
      <div class="alignment-option">
        <input type="radio" name="webappfull-alignment-${id}" id="webappfull-align-right-${id}" class="webappfull-align" value="right" ${align === "right" ? "checked" : ""} onchange="alignWebappfull(this)">
        <label for="webappfull-align-right-${id}">
          <span class="material-icons">format_align_right</span>
          ${window.i18n.Right}
        </label>
      </div>
    </div>
</div>
<iframe class="webappfullIframe" src="${url}" style="width:${width}%;height:${ratio === "" ? heightIframe + "px" : height};border:none;max-width:1500px; aspect-ratio:${ratio}" >
</iframe>
</div>`;

var countdownTemplate = ()=> `<div class="editor" ><countdown/></div>`;

var progressBarTemplate = ()=> `<div class="editor" >
<progressbar>
    <div class="col-xs-12 col-md-8 col-md-push-2 col-lg-6 col-lg-push-3"  style="margin:auto;">
        <div class="progress">
            <div class="progress-bar puzzle-progress bg-success" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
    </div>
</progressbar>
</div>
`;

//Render item depending on assetType
const assetItemTemplate = (payload)=> {
    let assetConfig = payload.config;
    if((typeof assetConfig === "undefined")||(assetConfig === null)){
        assetConfig = {};
    }
    if(typeof assetConfig.width === "undefined"){
        assetConfig.width = "100%";
    }
    if(typeof assetConfig.height === "undefined"){
        assetConfig.height = "auto";
    }

    switch(payload.assetType){
    case "image":
        return `<img src="${payload.url}" style="width:${assetConfig.width};height:${assetConfig.height};max-width:100%">`;
    case "audio":
        return `<audio controls=${assetConfig.controls!=="undefined"?"controls":null}  ${assetConfig.autoplay===true ? "autoplay" : ""}  src="${payload.url}"/>`;
    case "video":
        return `<div class="ckeditor-html5-video" style="text-align: center;max-width:100%" src="${payload.url}" ><video ${assetConfig.autoplay===true ? "autoplay" : ""} style="width:${assetConfig.width}px;height:${assetConfig.height}px" controls=${assetConfig.controls!=="undefined"?"controls":null} src="${payload.url}" download=${assetConfig.download!=="undefined"?"download":null}/></div>`;
    case "webapp":
        assetConfig.width = "100%";
        assetConfig.height = "auto";
        return `<div style="width:${assetConfig.width};height:${assetConfig.height};max-width:1500px"  >
             <iframe src="${payload.url}"  style="border:none" width="100%" height="100%" >
             </iframe>
        </div>`;
    case "pdf":
        return `<div style="width:${assetConfig.width}px;height:${assetConfig.height}px;max-width:100%"  >
        <object data="${payload.url}" type="application/pdf" width="100%" height="100%">
            <iframe style="border:none" src="${payload.url}" width="100%" height="100%" >
            </iframe>
        </object>
        </div>`;
    default:
        return "";
    }
}

const assetTemplate = async(id, payload) =>{
    return textEditorTemplate(id, assetItemTemplate(payload));
}

var insertContent = async (index, type, payload = {}, puzzles) => {
    var content = "";
    var id = "ck-" + index + "-" + Date.now();

    switch(type){
        case "countdown":
            content = countdownTemplate();
            break;
        case "ranking":
            content = rankingTemplate();
            break;
        case "text":
            content = textEditorTemplate(id, payload.text);
            break;
        case "progress":
            content = progressBarTemplate();
            break;
        case "webapp":
        case "reusablePuzzleInstance":
            content = reusablePuzzleTemplate(id, payload.url, payload.width, payload.height, payload.align, payload.ratio, payload.heightIframe);
            break;
        case "scene":
            content = sceneTemplate(id, payload.url, payload.width, payload.height, payload.align, payload.ratio, payload.heightIframe);
            break;
        case "asset":
            content = await assetTemplate(id, payload);
            break;
        case "text":
        default:
            break;
    }
    var htmlContent = $(blockTemplate(index, content, type, puzzles));
    $('#custom-content').append(htmlContent);
    if ((type === "text") || (type === "asset" && payload.url )) {
        let editor = CKEDITOR.replace(id);
        //When replacing there is a hidden div with the content that is latter
        //read to save the content and an iframe that is the editor
        //when autoplay is enabled both audios or videos are played
        //and there is no way to stop the hidden one
        editor.on("instanceReady", function(){
            let video = $(`#${id}`).parent().find("video");
            if(video.length){
                video[0].pause();
            }
            let audio = $(`#${id}`).parent().find("audio");
            if(audio.length){
                audio[0].pause();
            }
        });
    }
};

var deleteDef = (id) => {
    var parent = $('#'+id);
    var type = parent.data("content-type");

    if (type === "text") {
        CKEDITOR.instances[ parent.find(".editor").attr("name")].destroy(); // TODO
    }
    parent.remove();
};

var overlayTrigger = (id, close) => {
    $('.overlay-trigger').hide();
    if (!close) {
        $('.overlay-trigger[data-id="' + id + '"]').show();
    }
};

$(()=>{

    for (var i in window.content) {
        var block = window.content[i];
        insertContent(i, block.type, block.payload, block.puzzles)
    }

    $(".theme-item").on("click", (ev)=>{
        selectedTheme = $(ev.currentTarget).data("value");
        $(".selected-theme").removeClass("selected-theme");
        $(ev.currentTarget).addClass("selected-theme");
    });

    if ($("#dialog-themes").length){
        $("#dialog-themes").dialog({...config,
            buttons: {
                [window.accept] : ()=>{
                    if (selectedTheme && $('#appearance').val() !== selectedTheme) {
                        window.theme = window.getTheme(selectedTheme);
                        $('#appearance').val(selectedTheme);
                        $('#theme-title').html(selectedTheme[0].toUpperCase() +  selectedTheme.slice(1));
                        for (var instance of Object.keys(CKEDITOR.instances)){
                            CKEDITOR.instances[instance].destroy();
                            CKEDITOR.replace(instance)
                        }
                        $('body link')[2].href = `/stylesheets/vendor/bootswatch/${selectedTheme || "cerulean"}.editor.bootstrap.min.css`;
                        $('#appearance').val(selectedTheme);
                    }
                    selectedTheme = null;
                    $( "#dialog-themes" ).dialog("close");

                },
                [window.cancel] : ()=> {
                    selectedTheme = null;
                    $( "#dialog-themes" ).dialog("close");
                }
            }
        });
    }

    if ($("#dialog-config").length) {
        $("#dialog-config").dialog({...config,// "closeOnEscape": false,
            "buttons": {
                [window.accept] : ()=>{
                    $( "#dialog-config" ).dialog("close");
                    var result = []
                    var l = $(".puzzle-preview-select input").length - 1;
                    $(".puzzle-preview-select input").each((i,e)=>{
                        if ($(e).prop('checked')){
                            result.push(i < l ? i : "all");
                        }
                    });

                    $('#'+window.blockId).data("puzzles", result.join(","));
                    $(".puzzle-preview-select input").prop('checked', false);
                },
                [window.cancel] : ()=> {
                    $( "#dialog-config" ).dialog("close");
                    window.blockId = null;
                    $(".puzzle-preview-select input").prop('checked', false);
                }
            }
        });
        $('#dialog-config').on('dialogclose', function(event) {
            $( "#dialog-config" ).dialog("close");
            window.blockId = null;
            $(".puzzle-preview-select input").prop('checked', false);
        });
    }

    $( ".theme-btn" ).on("click",() => {
        $( "#dialog-themes" ).dialog( "open" );
    });
    $("body").on("click", ".config-btn", function(){
        var parent = $(this).parent().parent();
        window.blockId = parent.attr("id");
        var puzzleIds = parent.data("puzzles").toString()
        puzzleIds = puzzleIds === "" ? [] : puzzleIds.split(",");
        var puzzleInputs = $(".puzzle-preview-select input");
        puzzleInputs.each((i,e)=>{

            if ((puzzleIds.indexOf(i.toString()) !== -1) || (i.toString() == (puzzleInputs.length -1) && puzzleIds.indexOf("all") !== -1)) {
                $(e).prop('checked', true);
            }
        });
        $( "#dialog-config" ).dialog( "open" );
    });


    $("body").on("click", '.delete-btn', function(){
        var parent = $(this).parent().parent();
        var id = parent.attr("id");
        overlayTrigger(id);
    });

    $('#custom-content').sortable({
        "items": ".building-block",
        "handle": '.reorder-btn',
        "cancel": '',
        "placeholder": "ui-sortable-placeholder",
        "stop": (_event, ui)=>{
           if (ui.item.data("content-type") === "text") {
            var instanceId = ui.item.find(".editor").attr("id")
            CKEDITOR.instances[instanceId].destroy();
            setTimeout(()=>{
                CKEDITOR.replace(instanceId);
            },0);
           }
        }
    });

    if ($( ".block-config" ).length) { $( ".block-config" ).disableSelection();}
    $('#instructionsForm').submit((ev)=>{
        var results = [];
        $('.building-block').each((_i,e)=>{
            var type = $(e).data("content-type");
            var puzzles = $(e).data("puzzles") !== "" ? $(e).data("puzzles").toString().split(",") : [];
            var obj = {type,puzzles};
            if(type === "text"){
                const id = $(e).find(".editor").attr("id");
                //Por algun motivo el tag de script da problemas y hay que cambiarlo por este
                obj.payload = {text: CKEDITOR.instances[id].getData().replaceAll("</script>", "<\\/script>")};
                obj.type = type;
            } else if ((type === "reusablePuzzleInstance")||(type === "webapp")) {
                const src = $(e).find(".webappfullIframe").attr("src");
                obj.payload = {
                    url: src, 
                    width: $(e).find(".webappfullWidth").val(),
                    heightIframe: $(e).find(".webappfullHeightInput").val(),
                    align: $(e).find(".webappfull-align:checked").val(),
                    ratio: $(e).find(".webappfullAspectRatioSelect").val()
                };
                obj.type = type;
            } else if (type === "scene") {
                const sceneIframe = $(e).find(".webappfullIframe");
                const src = sceneIframe.attr("src");
                obj.payload = {
                    url: src, 
                    width: $(e).find(".webappfullWidth").val(),
                    align: $(e).find(".webappfull-align:checked").val(),
                    ratio: sceneIframe.css("aspect-ratio")
                };
                obj.type = type;
            }
            results.push(obj);
        });
        $("<input />").attr("type", "hidden")
          .attr("name", "instructions")
          .attr("value", JSON.stringify(results))
          .appendTo("#instructionsForm");
    });

    var videoCallback = (win) => {
        var iDoc = win.document;
        try {
            for (var vid of iDoc.getElementsByTagName('video')){
                vid.pause();
            }
            for (var ifr of iDoc.getElementsByTagName('iframe')){
                var win2 = ifr.contentWindow;
                try {
                    if (ifr.src.match("youtube")) {
                        if (!ifr.src.match("enablejsapi=1")){
                            ifr.src += ifr.src.match("\\?") ? "&enablejsapi=1":"?enablejsapi=1";
                        }
                        setTimeout(()=>{
                            win2.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
                        },800);
                    }
                 } catch(e){}
                videoCallback(win2);
            }
        } catch(e){}
    };

    CKEDITOR.on("instanceReady", ()=>videoCallback(window));
    videoCallback(window);

});
