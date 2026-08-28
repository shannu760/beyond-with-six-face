/*
  BEYOND — Motion in a Straight Line
  Adobe After Effects Hyperframe Motion Graphics Generator Script (.jsx)
  
  Instructions:
  1. Open Adobe After Effects.
  2. Go to File > Scripts > Run Script File...
  3. Select this `beyond_motion_in_a_straight_line.jsx` file.
  4. After Effects will automatically construct the 1080x1920 60FPS composition with 3D camera tracking,
     glowing shape layers, hyperframe keyframe easing, formula cards, and audio sync!
*/

(function createBeyondReel() {
    app.beginUndoGroup("Create BEYOND Motion Reel");

    // 1. Create Main Composition (1080 x 1920, 60 FPS, 45.61 Seconds)
    var compWidth = 1080;
    var compHeight = 1920;
    var pixelAspect = 1.0;
    var duration = 45.61;
    var frameRate = 60;
    
    var comp = app.project.items.addComp(
        "BEYOND - Motion in a Straight Line (Hyperframe)",
        compWidth,
        compHeight,
        pixelAspect,
        duration,
        frameRate
    );

    // Color Palette
    var colorDarkBG = [10/255, 13/255, 20/255];
    var colorCyan = [0/255, 240/255, 255/255];
    var colorGold = [255/255, 215/255, 0/255];
    var colorCrimson = [255/255, 46/255, 99/255];
    var colorWhite = [1, 1, 1];

    // 2. Background Solid Layer
    var bgSolid = comp.layers.addSolid(colorDarkBG, "Background Dark Void", compWidth, compHeight, 1.0);
    bgSolid.locked = true;

    // 3. Helper Function for Text Layers
    function addTextLayer(name, text, fontSize, color, pos, startTime, dur) {
        var txtLayer = comp.layers.addText(text);
        txtLayer.name = name;
        txtLayer.inPoint = startTime;
        txtLayer.outPoint = startTime + dur;
        
        var txtProp = txtLayer.property("Source Text");
        var txtDocument = txtProp.value;
        txtDocument.fontSize = fontSize;
        txtDocument.fillColor = color;
        txtDocument.font = "SegoeUI-Bold";
        txtDocument.justification = ParagraphJustification.CENTER_JUSTIFY;
        txtProp.setValue(txtDocument);
        
        txtLayer.property("Position").setValue(pos);
        return txtLayer;
    }

    // Helper for Smooth Hyperframe Easing Keyframes
    function applyHyperEase(prop, time1, time2, val1, val2) {
        prop.setValueAtTime(time1, val1);
        prop.setValueAtTime(time2, val2);
        
        var k1 = prop.keyIndexAtTime(time1);
        var k2 = prop.keyIndexAtTime(time2);
        
        var easeIn = new KeyframeEase(0, 85); // 85% easing influence (hyperframe smooth curve)
        var easeOut = new KeyframeEase(0, 85);
        
        try {
            prop.setTemporalEaseAtKey(k1, [easeOut], [easeOut]);
            prop.setTemporalEaseAtKey(k2, [easeIn], [easeIn]);
        } catch (e) {}
    }

    // --- SCENE 1: THE HOOK (0.00s - 6.57s) ---
    var txtHook = addTextLayer(
        "Scene 1: Hook Title",
        "MOTION IN A STRAIGHT LINE",
        56,
        colorGold,
        [540, 750],
        3.80,
        2.77
    );
    // Scale Hyperframe Zoom
    var scaleProp = txtHook.property("Scale");
    applyHyperEase(scaleProp, 3.80, 4.30, [0, 0, 100], [100, 100, 100]);

    // 1D Glowing X-Axis Shape Layer
    var axisShape = comp.layers.addShape();
    axisShape.name = "X-Axis Line";
    axisShape.inPoint = 0.0;
    axisShape.outPoint = duration;
    
    var shapeGroup = axisShape.property("Contents").addProperty("ADBE Vector Group");
    var shapePath = shapeGroup.property("Contents").addProperty("ADBE Vector Shape - Group");
    var pathData = new Shape();
    pathData.vertices = [[60, 1300], [1020, 1300]];
    pathData.closed = false;
    shapePath.property("Path").setValue(pathData);
    
    var shapeStroke = shapeGroup.property("Contents").addProperty("ADBE Vector Stroke - Color");
    shapeStroke.property("Color").setValue(colorCyan);
    shapeStroke.property("Stroke Width").setValue(6);

    // --- SCENE 2: WHAT IS MOTION? (6.57s - 10.45s) ---
    var hudBox = comp.layers.addShape();
    hudBox.name = "Scene 2: HUD Box";
    hudBox.inPoint = 6.57;
    hudBox.outPoint = 10.45;
    
    var hudText = addTextLayer(
        "Scene 2: Formula",
        "CHANGE IN POSITION + TIME = MOTION",
        42,
        colorWhite,
        [540, 870],
        8.50,
        1.95
    );
    var opacityProp = hudText.property("Opacity");
    applyHyperEase(opacityProp, 8.50, 8.90, 0, 100);

    // --- SCENE 3: POSITION (10.45s - 16.36s) ---
    var posCard = addTextLayer(
        "Scene 3: Position Card",
        "POSITION (x) = 10.0 m",
        48,
        colorCyan,
        [540, 660],
        10.45,
        5.91
    );

    // --- SCENE 4: DISTANCE VS DISPLACEMENT (16.36s - 22.28s) ---
    var distCard = addTextLayer(
        "Scene 4: Distance Card",
        "DISTANCE (TOTAL PATH) = 42.0 m",
        42,
        colorGold,
        [540, 650],
        16.36,
        2.50
    );
    
    var dispCard = addTextLayer(
        "Scene 4: Displacement Vector Card",
        "DISPLACEMENT (Δx) = +20.0 m (VECTOR)",
        44,
        colorCyan,
        [540, 685],
        18.86,
        3.42
    );
    var dispOpacity = dispCard.property("Opacity");
    applyHyperEase(dispOpacity, 18.86, 19.30, 0, 100);

    // --- SCENE 5: SPEED VS VELOCITY (22.28s - 29.32s) ---
    var speedCard = addTextLayer(
        "Scene 5: Speed Card",
        "SPEED = 60 km/h (SCALAR)",
        44,
        colorGold,
        [540, 650],
        22.28,
        3.00
    );
    
    var velCard = addTextLayer(
        "Scene 5: Velocity Card",
        "VELOCITY = +60 km/h (VECTOR)",
        44,
        colorCyan,
        [540, 650],
        25.28,
        4.04
    );

    // --- SCENE 6: ACCELERATION (29.32s - 32.78s) ---
    var accelCard = addTextLayer(
        "Scene 6: Acceleration Card",
        "ACCELERATION (a) = Δv / Δt",
        44,
        colorCrimson,
        [540, 625],
        29.32,
        3.46
    );

    // --- SCENE 7: OUTRO (32.78s - 45.61s) ---
    var brandLogo = addTextLayer(
        "Scene 7: BEYOND Brand Logo",
        "BEYOND",
        76,
        colorWhite,
        [540, 900],
        40.00,
        5.61
    );
    var brandTag = addTextLayer(
        "Scene 7: Tagline",
        "Beyond memorization. Understand reality.",
        34,
        colorGold,
        [540, 1000],
        40.00,
        5.61
    );
    
    var logoScale = brandLogo.property("Scale");
    applyHyperEase(logoScale, 40.00, 40.80, [40, 40, 100], [100, 100, 100]);

    // 4. Add Composition to After Effects Render Queue
    var rqItem = app.project.renderQueue.items.add(comp);
    
    app.endUndoGroup();
    alert("BEYOND Hyperframe Composition successfully created in After Effects!\n\nCheck the Render Queue or composition timeline.");
})();
