import Component, { ComponentConstructor } from "../component"
import { InputEvent, SubmitEvent, KeyEvent, ChangeEvent } from "./ws"
import { CSS } from "../css"
import { NestedArray } from "../helpers"

/* tslint:disable no-namespace */

export namespace JSX {
  export interface Element<T = HTMLAttributes> {
    nodeName: string | ComponentConstructor<any, any>
    attributes: T
    children: Child | NestedArray<Child>
  }
  export interface ComponentElement<T = HTMLAttributes> extends Element<T> {
    nodeName: ComponentConstructor<any, any>
  }
  export interface NormalElement<T = HTMLAttributes> extends Element<T> {
    nodeName: string
  }

  export interface ElementClass extends Component<any, any> {}
  export interface ElementAttributesProperty {
    props: {}
  }
  export interface ElementChildrenAttribute {
    children: {}
  }

  // Everything below is taken from:
  // https://github.com/ionic-team/stencil/blob/master/src/declarations/jsx.ts
  export interface IntrinsicElements {
    // HTML
    a: AnchorHTMLAttributes
    abbr: HTMLAttributes
    address: HTMLAttributes
    area: AreaHTMLAttributes
    article: HTMLAttributes
    aside: HTMLAttributes
    audio: AudioHTMLAttributes
    b: HTMLAttributes
    base: BaseHTMLAttributes
    bdi: HTMLAttributes
    bdo: HTMLAttributes
    big: HTMLAttributes
    blockquote: BlockquoteHTMLAttributes
    body: HTMLAttributes
    br: HTMLAttributes
    button: ButtonHTMLAttributes
    canvas: CanvasHTMLAttributes
    caption: HTMLAttributes
    cite: HTMLAttributes
    code: HTMLAttributes
    col: ColHTMLAttributes
    colgroup: ColgroupHTMLAttributes
    data: HTMLAttributes
    datalist: HTMLAttributes
    dd: HTMLAttributes
    del: DelHTMLAttributes
    details: DetailsHTMLAttributes
    dfn: HTMLAttributes
    dialog: DialogHTMLAttributes
    div: HTMLAttributes
    dl: HTMLAttributes
    dt: HTMLAttributes
    em: HTMLAttributes
    embed: EmbedHTMLAttributes
    fieldset: FieldsetHTMLAttributes
    figcaption: HTMLAttributes
    figure: HTMLAttributes
    footer: HTMLAttributes
    form: FormHTMLAttributes
    h1: HTMLAttributes
    h2: HTMLAttributes
    h3: HTMLAttributes
    h4: HTMLAttributes
    h5: HTMLAttributes
    h6: HTMLAttributes
    head: HTMLAttributes
    header: HTMLAttributes
    hgroup: HTMLAttributes
    hr: HTMLAttributes
    html: HTMLAttributes
    i: HTMLAttributes
    iframe: IframeHTMLAttributes
    img: ImgHTMLAttributes
    input:
      | CheckboxInputHTMLAttributes
      | NumberInputHTMLAttributes
      | TextInputHTMLAttributes
    ins: InsHTMLAttributes
    kbd: HTMLAttributes
    keygen: KeygenHTMLAttributes
    label: LabelHTMLAttributes
    legend: HTMLAttributes
    li: LiHTMLAttributes
    link: LinkHTMLAttributes
    main: HTMLAttributes
    map: MapHTMLAttributes
    mark: HTMLAttributes
    menu: MenuHTMLAttributes
    menuitem: HTMLAttributes
    meta: MetaHTMLAttributes
    meter: MeterHTMLAttributes
    nav: HTMLAttributes
    noscript: HTMLAttributes
    object: ObjectHTMLAttributes
    ol: OlHTMLAttributes
    optgroup: OptgroupHTMLAttributes
    option: OptionHTMLAttributes
    output: OutputHTMLAttributes
    p: HTMLAttributes
    param: ParamHTMLAttributes
    picture: HTMLAttributes
    pre: HTMLAttributes
    progress: ProgressHTMLAttributes
    q: QuoteHTMLAttributes
    rp: HTMLAttributes
    rt: HTMLAttributes
    ruby: HTMLAttributes
    s: HTMLAttributes
    samp: HTMLAttributes
    script: ScriptHTMLAttributes
    section: HTMLAttributes
    select: MultiSelectHTMLAttributes | SingleSelectHTMLAttributes
    small: HTMLAttributes
    source: SourceHTMLAttributes
    span: HTMLAttributes
    strong: HTMLAttributes
    style: StyleHTMLAttributes
    sub: HTMLAttributes
    summary: HTMLAttributes
    sup: HTMLAttributes
    table: TableHTMLAttributes
    tbody: HTMLAttributes
    td: TdHTMLAttributes
    textarea: TextareaHTMLAttributes
    tfoot: HTMLAttributes
    th: ThHTMLAttributes
    thead: HTMLAttributes
    time: TimeHTMLAttributes
    title: HTMLAttributes
    tr: HTMLAttributes
    track: TrackHTMLAttributes
    u: HTMLAttributes
    ul: HTMLAttributes
    var: HTMLAttributes
    video: VideoHTMLAttributes
    wbr: HTMLAttributes
  }

  export interface AnchorHTMLAttributes extends HTMLAttributes {
    download?: any
    href?: string
    hrefLang?: string
    hreflang?: string
    media?: string
    rel?: string
    target?: string
  }

  // tslint:disable-next-line
  export interface AudioHTMLAttributes extends MediaHTMLAttributes {}

  export interface AreaHTMLAttributes extends HTMLAttributes {
    alt?: string
    coords?: string
    download?: any
    href?: string
    hrefLang?: string
    hreflang?: string
    media?: string
    rel?: string
    shape?: string
    target?: string
  }

  export interface BaseHTMLAttributes extends HTMLAttributes {
    href?: string
    target?: string
  }

  export interface BlockquoteHTMLAttributes extends HTMLAttributes {
    cite?: string
  }

  export interface ButtonHTMLAttributes extends HTMLAttributes {
    autoFocus?: boolean
    disabled?: boolean
    form?: string
    formAction?: string
    formaction?: string
    formEncType?: string
    formenctype?: string
    formMethod?: string
    formmethod?: string
    formNoValidate?: boolean
    formnovalidate?: boolean
    formTarget?: string
    formtarget?: string
    name?: string
    type?: string
    value?: string | number
  }

  export interface CanvasHTMLAttributes extends HTMLAttributes {
    height?: number | string
    width?: number | string
  }

  export interface ColHTMLAttributes extends HTMLAttributes {
    span?: number
  }

  export interface ColgroupHTMLAttributes extends HTMLAttributes {
    span?: number
  }

  export interface DetailsHTMLAttributes extends HTMLAttributes {
    open?: boolean
  }

  export interface DelHTMLAttributes extends HTMLAttributes {
    cite?: string
    dateTime?: string
    datetime?: string
  }

  export interface DialogHTMLAttributes extends HTMLAttributes {
    open?: boolean
    returnValue?: string
  }

  export interface EmbedHTMLAttributes extends HTMLAttributes {
    height?: number | string
    src?: string
    type?: string
    width?: number | string
  }

  export interface FieldsetHTMLAttributes extends HTMLAttributes {
    disabled?: boolean
    form?: string
    name?: string
  }

  export interface FormHTMLAttributes extends HTMLAttributes {
    acceptCharset?: string
    acceptcharset?: string
    action?: string
    autoComplete?: string
    autocomplete?: string
    encType?: string
    enctype?: string
    method?: string
    name?: string
    noValidate?: boolean
    novalidate?: boolean | string
    target?: string
  }

  export interface HtmlHTMLAttributes extends HTMLAttributes {
    manifest?: string
  }

  export interface IframeHTMLAttributes extends HTMLAttributes {
    allowFullScreen?: boolean
    allowfullScreen?: string | boolean
    allowTransparency?: boolean
    allowtransparency?: string | boolean
    frameBorder?: number | string
    frameborder?: number | string
    height?: number | string
    marginHeight?: number
    marginheight?: string | number
    marginWidth?: number
    marginwidth?: string | number
    name?: string
    sandbox?: string
    scrolling?: string
    seamless?: boolean
    src?: string
    srcDoc?: string
    srcdoc?: string
    width?: number | string
  }

  export interface ImgHTMLAttributes extends HTMLAttributes {
    alt?: string
    decoding?: "async" | "auto" | "sync"
    height?: number | string
    sizes?: string
    src?: string
    srcSet?: string
    srcset?: string
    useMap?: string
    usemap?: string
    width?: number | string
  }

  export interface InsHTMLAttributes extends HTMLAttributes {
    cite?: string
    dateTime?: string
    datetime?: string
  }

  export interface CheckboxInputHTMLAttributes
    extends Omit<InputHTMLAttributes, "onChange" | "onInput"> {
    type: "checkbox"
    onChange?: (event: ChangeEvent<boolean>) => void
    onInput?: (event: InputEvent<boolean>) => void
  }

  export interface NumberInputHTMLAttributes
    extends Omit<InputHTMLAttributes, "onChange" | "onInput"> {
    type: "number"
    onChange?: (event: ChangeEvent<number>) => void
    onInput?: (event: InputEvent<number>) => void
  }

  export interface TextInputHTMLAttributes
    extends Omit<InputHTMLAttributes, "onChange" | "onInput"> {
    type?: Exclude<InputType, "checkbox" | "number">
    onChange?: (event: ChangeEvent<string>) => void
    onInput?: (event: InputEvent<string>) => void
  }

  export type InputType =
    | "button"
    | "checkbox"
    | "color"
    | "date"
    | "datetime"
    | "datetime-local"
    | "email"
    | "file"
    | "hidden"
    | "image"
    | "month"
    | "number"
    | "password"
    | "radio"
    | "range"
    | "reset"
    | "search"
    | "submit"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week"

  export interface InputHTMLAttributes extends HTMLAttributes {
    // Purview specific
    defaultValue?: string | number
    defaultChecked?: boolean

    // Standard HTML Attributes
    accept?: string
    alt?: string
    autoComplete?: string
    autocomplete?: string
    autoFocus?: boolean
    autofocus?: boolean | string
    capture?: string // https://www.w3.org/TR/html-media-capture/#the-capture-attribute
    checked?: boolean
    crossOrigin?: string
    crossorigin?: string
    disabled?: boolean
    form?: string
    formAction?: string
    formaction?: string
    formEncType?: string
    formenctype?: string
    formMethod?: string
    formmethod?: string
    formNoValidate?: boolean
    formnovalidate?: boolean
    formTarget?: string
    formtarget?: string
    height?: number | string
    list?: string
    max?: number | string
    maxLength?: number
    maxlength?: number | string
    min?: number | string
    minLength?: number
    minlength?: number | string
    multiple?: boolean
    name?: string
    pattern?: string
    placeholder?: string
    readOnly?: boolean
    readonly?: boolean | string
    required?: boolean
    size?: number
    src?: string
    step?: number | string
    type?: InputType
    value?: string | number
    width?: number | string
  }

  export interface KeygenHTMLAttributes extends HTMLAttributes {
    autoFocus?: boolean
    autofocus?: boolean | string
    challenge?: string
    disabled?: boolean
    form?: string
    keyType?: string
    keytype?: string
    keyParams?: string
    keyparams?: string
    name?: string
  }

  export interface LabelHTMLAttributes extends HTMLAttributes {
    form?: string
    htmlFor?: string
    htmlfor?: string
  }

  export interface LiHTMLAttributes extends HTMLAttributes {
    value?: string | number
  }

  export interface LinkHTMLAttributes extends HTMLAttributes {
    href?: string
    hrefLang?: string
    hreflang?: string
    integrity?: string
    media?: string
    rel?: string
    sizes?: string
    type?: string
  }

  export interface MapHTMLAttributes extends HTMLAttributes {
    name?: string
  }

  export interface MenuHTMLAttributes extends HTMLAttributes {
    type?: string
  }

  export interface MediaHTMLAttributes extends HTMLAttributes {
    autoPlay?: boolean
    autoplay?: boolean | string
    controls?: boolean
    crossOrigin?: string
    crossorigin?: string
    loop?: boolean
    mediaGroup?: string
    mediagroup?: string
    muted?: boolean
    preload?: string
    src?: string
  }

  export interface MetaHTMLAttributes extends HTMLAttributes {
    charSet?: string
    charset?: string
    content?: string
    httpEquiv?: string
    httpequiv?: string
    name?: string
  }

  export interface MeterHTMLAttributes extends HTMLAttributes {
    form?: string
    high?: number
    low?: number
    max?: number | string
    min?: number | string
    optimum?: number
    value?: string | number
  }

  export interface QuoteHTMLAttributes extends HTMLAttributes {
    cite?: string
  }

  export interface ObjectHTMLAttributes extends HTMLAttributes {
    classID?: string
    classid?: string
    data?: string
    form?: string
    height?: number | string
    name?: string
    type?: string
    useMap?: string
    usemap?: string
    width?: number | string
    wmode?: string
  }

  export interface OlHTMLAttributes extends HTMLAttributes {
    reversed?: boolean
    start?: number
  }

  export interface OptgroupHTMLAttributes extends HTMLAttributes {
    disabled?: boolean
    label?: string
  }

  export interface OptionHTMLAttributes extends HTMLAttributes {
    // Purview specific
    defaultSelected?: boolean

    // Standard HTML attributes
    disabled?: boolean
    label?: string
    selected?: boolean
    value?: string | number
  }

  export interface OutputHTMLAttributes extends HTMLAttributes {
    form?: string
    htmlFor?: string
    htmlfor?: string
    name?: string
  }

  export interface ParamHTMLAttributes extends HTMLAttributes {
    name?: string
    value?: string | number
  }

  export interface ProgressHTMLAttributes extends HTMLAttributes {
    max?: number | string
    value?: string | number
  }

  export interface ScriptHTMLAttributes extends HTMLAttributes {
    async?: boolean
    charSet?: string
    charset?: string
    crossOrigin?: string
    crossorigin?: string
    defer?: boolean
    integrity?: string
    nonce?: string
    src?: string
    type?: string
  }

  export interface MultiSelectHTMLAttributes
    extends Omit<SelectHTMLAttributes, "onChange" | "onInput"> {
    multiple: true
    onChange?: (event: ChangeEvent<string[]>) => void
    onInput?: (event: InputEvent<string[]>) => void
  }

  export interface SingleSelectHTMLAttributes
    extends Omit<SelectHTMLAttributes, "onChange" | "onInput"> {
    multiple?: false
    onChange?: (event: ChangeEvent<string>) => void
    onInput?: (event: InputEvent<string>) => void
  }

  export interface SelectHTMLAttributes extends HTMLAttributes {
    autoFocus?: boolean
    autoComplete?: string
    autocomplete?: string
    disabled?: boolean
    form?: string
    multiple?: boolean
    name?: string
    required?: boolean
    size?: number
  }

  export interface SourceHTMLAttributes extends HTMLAttributes {
    media?: string
    sizes?: string
    src?: string
    srcSet?: string
    type?: string
  }

  export interface StyleHTMLAttributes extends HTMLAttributes {
    media?: string
    nonce?: string
    scoped?: boolean
    type?: string
  }

  export interface TableHTMLAttributes extends HTMLAttributes {
    cellPadding?: number | string
    cellpadding?: number | string
    cellSpacing?: number | string
    cellspacing?: number | string
    summary?: string
  }

  export interface TextareaHTMLAttributes extends HTMLAttributes {
    // Purview specific
    defaultValue?: string | number

    // Standard HTML attributes
    autoFocus?: boolean
    autofocus?: boolean | string
    cols?: number
    disabled?: boolean
    form?: string
    maxLength?: number
    maxlength?: number | string
    minLength?: number
    minlength?: number | string
    name?: string
    placeholder?: string
    readOnly?: boolean
    readonly?: boolean | string
    required?: boolean
    rows?: number
    value?: string | number
    wrap?: string
  }

  export interface TdHTMLAttributes extends HTMLAttributes {
    colSpan?: number
    colspan?: number
    headers?: string
    rowSpan?: number
  }

  export interface ThHTMLAttributes extends HTMLAttributes {
    colSpan?: number
    colspan?: number
    headers?: string
    rowSpan?: number
    rowspan?: number | string
    scope?: string
  }

  export interface TimeHTMLAttributes extends HTMLAttributes {
    dateTime?: string
  }

  export interface TrackHTMLAttributes extends HTMLAttributes {
    default?: boolean
    kind?: string
    label?: string
    src?: string
    srcLang?: string
    srclang?: string
  }

  export interface VideoHTMLAttributes extends MediaHTMLAttributes {
    height?: number | string
    playsInline?: boolean
    playsinline?: boolean | string
    poster?: string
    width?: number | string
  }

  export type Child = string | number | boolean | null | undefined | JSX.Element

  export interface HTMLAttributes extends DOMAttributes {
    // Purview specific
    key?: string | number
    children?: Child | NestedArray<Child>
    ignoreChildren?: boolean
    css?: CSS

    // Standard HTML Attributes
    accessKey?: string
    class?: string
    contentEditable?: boolean | string
    contenteditable?: boolean | string
    contextMenu?: string
    contextmenu?: string
    dir?: string
    draggable?: boolean
    hidden?: boolean
    id?: string
    lang?: string
    slot?: string
    spellCheck?: boolean
    spellcheck?: boolean | string
    style?: string
    tabIndex?: number
    tabindex?: number | string
    title?: string

    // Unknown
    inputMode?: string
    inputmode?: string
    is?: string
    radioGroup?: string // <command>, <menuitem>
    radiogroup?: string

    // WAI-ARIA
    role?: string

    // RDFa Attributes
    about?: string
    datatype?: string
    inlist?: any
    prefix?: string
    property?: string
    resource?: string
    typeof?: string
    vocab?: string

    // Non-standard Attributes
    autoCapitalize?: string
    autocapitalize?: string
    autoCorrect?: string
    autocorrect?: string
    autoSave?: string
    autosave?: string
    color?: string
    itemProp?: string
    itemprop?: string
    itemScope?: boolean
    itemscope?: boolean
    itemType?: string
    itemtype?: string
    itemID?: string
    itemid?: string
    itemRef?: string
    itemref?: string
    results?: number
    security?: string
    unselectable?: boolean
  }

  export interface SVGAttributes extends DOMAttributes {
    // Attributes which are also defined in HTMLAttributes
    class?: string
    color?: string
    height?: number | string
    id?: string
    lang?: string
    max?: number | string
    media?: string
    method?: string
    min?: number | string
    name?: string
    style?: string
    target?: string
    type?: string
    width?: number | string

    // Other HTML properties supported by SVG elements in browsers
    role?: string
    tabIndex?: number

    // SVG Specific attributes
    accentHeight?: number | string
    accumulate?: "none" | "sum"
    additive?: "replace" | "sum"
    alignmentBaseline?:
      | "auto"
      | "baseline"
      | "before-edge"
      | "text-before-edge"
      | "middle"
      | "central"
      | "after-edge"
      | "text-after-edge"
      | "ideographic"
      | "alphabetic"
      | "hanging"
      | "mathematical"
      | "inherit"
    allowReorder?: "no" | "yes"
    alphabetic?: number | string
    amplitude?: number | string
    arabicForm?: "initial" | "medial" | "terminal" | "isolated"
    ascent?: number | string
    attributeName?: string
    attributeType?: string
    autoReverse?: number | string
    azimuth?: number | string
    baseFrequency?: number | string
    baselineShift?: number | string
    baseProfile?: number | string
    bbox?: number | string
    begin?: number | string
    bias?: number | string
    by?: number | string
    calcMode?: number | string
    capHeight?: number | string
    clip?: number | string
    clipPath?: string
    clipPathUnits?: number | string
    clipRule?: number | string
    colorInterpolation?: number | string
    colorInterpolationFilters?: "auto" | "sRGB" | "linearRGB" | "inherit"
    colorProfile?: number | string
    colorRendering?: number | string
    contentScriptType?: number | string
    contentStyleType?: number | string
    cursor?: number | string
    cx?: number | string
    cy?: number | string
    d?: string
    decelerate?: number | string
    descent?: number | string
    diffuseConstant?: number | string
    direction?: number | string
    display?: number | string
    divisor?: number | string
    dominantBaseline?: number | string
    dur?: number | string
    dx?: number | string
    dy?: number | string
    edgeMode?: number | string
    elevation?: number | string
    enableBackground?: number | string
    end?: number | string
    exponent?: number | string
    externalResourcesRequired?: number | string
    fill?: string
    fillOpacity?: number | string
    fillRule?: "nonzero" | "evenodd" | "inherit"
    filter?: string
    filterRes?: number | string
    filterUnits?: number | string
    floodColor?: number | string
    floodOpacity?: number | string
    focusable?: number | string
    fontFamily?: string
    fontSize?: number | string
    fontSizeAdjust?: number | string
    fontStretch?: number | string
    fontStyle?: number | string
    fontVariant?: number | string
    fontWeight?: number | string
    format?: number | string
    from?: number | string
    fx?: number | string
    fy?: number | string
    g1?: number | string
    g2?: number | string
    glyphName?: number | string
    glyphOrientationHorizontal?: number | string
    glyphOrientationVertical?: number | string
    glyphRef?: number | string
    gradientTransform?: string
    gradientUnits?: string
    hanging?: number | string
    horizAdvX?: number | string
    horizOriginX?: number | string
    ideographic?: number | string
    imageRendering?: number | string
    in2?: number | string
    in?: string
    intercept?: number | string
    k1?: number | string
    k2?: number | string
    k3?: number | string
    k4?: number | string
    k?: number | string
    kernelMatrix?: number | string
    kernelUnitLength?: number | string
    kerning?: number | string
    keyPoints?: number | string
    keySplines?: number | string
    keyTimes?: number | string
    lengthAdjust?: number | string
    letterSpacing?: number | string
    lightingColor?: number | string
    limitingConeAngle?: number | string
    local?: number | string
    markerEnd?: string
    markerHeight?: number | string
    markerMid?: string
    markerStart?: string
    markerUnits?: number | string
    markerWidth?: number | string
    mask?: string
    maskContentUnits?: number | string
    maskUnits?: number | string
    mathematical?: number | string
    mode?: number | string
    numOctaves?: number | string
    offset?: number | string
    opacity?: number | string
    operator?: number | string
    order?: number | string
    orient?: number | string
    orientation?: number | string
    origin?: number | string
    overflow?: number | string
    overlinePosition?: number | string
    overlineThickness?: number | string
    paintOrder?: number | string
    panose1?: number | string
    pathLength?: number | string
    patternContentUnits?: string
    patternTransform?: number | string
    patternUnits?: string
    pointerEvents?: number | string
    points?: string
    pointsAtX?: number | string
    pointsAtY?: number | string
    pointsAtZ?: number | string
    preserveAlpha?: number | string
    preserveAspectRatio?: string
    primitiveUnits?: number | string
    r?: number | string
    radius?: number | string
    refX?: number | string
    refY?: number | string
    renderingIntent?: number | string
    repeatCount?: number | string
    repeatDur?: number | string
    requiredExtensions?: number | string
    requiredFeatures?: number | string
    restart?: number | string
    result?: string
    rotate?: number | string
    rx?: number | string
    ry?: number | string
    scale?: number | string
    seed?: number | string
    shapeRendering?: number | string
    slope?: number | string
    spacing?: number | string
    specularConstant?: number | string
    specularExponent?: number | string
    speed?: number | string
    spreadMethod?: string
    startOffset?: number | string
    stdDeviation?: number | string
    stemh?: number | string
    stemv?: number | string
    stitchTiles?: number | string
    stopColor?: string
    stopOpacity?: number | string
    strikethroughPosition?: number | string
    strikethroughThickness?: number | string
    string?: number | string
    stroke?: string
    strokeDasharray?: string | number
    strokeDashoffset?: string | number
    strokeLinecap?: "butt" | "round" | "square" | "inherit"
    strokeLinejoin?: "miter" | "round" | "bevel" | "inherit"
    strokeMiterlimit?: string
    strokeOpacity?: number | string
    strokeWidth?: number | string
    surfaceScale?: number | string
    systemLanguage?: number | string
    tableValues?: number | string
    targetX?: number | string
    targetY?: number | string
    textAnchor?: string
    textDecoration?: number | string
    textLength?: number | string
    textRendering?: number | string
    to?: number | string
    transform?: string
    u1?: number | string
    u2?: number | string
    underlinePosition?: number | string
    underlineThickness?: number | string
    unicode?: number | string
    unicodeBidi?: number | string
    unicodeRange?: number | string
    unitsPerEm?: number | string
    vAlphabetic?: number | string
    values?: string
    vectorEffect?: number | string
    version?: string
    vertAdvY?: number | string
    vertOriginX?: number | string
    vertOriginY?: number | string
    vHanging?: number | string
    vIdeographic?: number | string
    viewBox?: string
    viewTarget?: number | string
    visibility?: number | string
    vMathematical?: number | string
    widths?: number | string
    wordSpacing?: number | string
    writingMode?: number | string
    x1?: number | string
    x2?: number | string
    x?: number | string
    xChannelSelector?: string
    xHeight?: number | string
    xlinkActuate?: string
    xlinkArcrole?: string
    xlinkHref?: string
    xlinkRole?: string
    xlinkShow?: string
    xlinkTitle?: string
    xlinkType?: string
    xmlBase?: string
    xmlLang?: string
    xmlns?: string
    xmlnsXlink?: string
    xmlSpace?: string
    y1?: number | string
    y2?: number | string
    y?: number | string
    yChannelSelector?: string
    z?: number | string
    zoomAndPan?: string
  }

  export interface DOMAttributes {
    // Clipboard Events
    onCopy?: () => void
    onCopyCapture?: () => void
    onCut?: () => void
    onCutCapture?: () => void
    onPaste?: () => void
    onPasteCapture?: () => void

    // Composition Events
    onCompositionEnd?: () => void
    onCompositionEndCapture?: () => void
    onCompositionStart?: () => void
    onCompositionStartCapture?: () => void
    onCompositionUpdate?: () => void
    onCompositionUpdateCapture?: () => void

    // Focus Events
    onFocus?: () => void
    onFocusCapture?: () => void
    onBlur?: () => void
    onBlurCapture?: () => void

    // Form Events
    onChange?: (event: InputEvent) => void
    onChangeCapture?: (event: InputEvent) => void
    onInput?: (event: InputEvent) => void
    onInputCapture?: (event: InputEvent) => void
    onReset?: () => void
    onResetCapture?: () => void
    onSubmit?: (event: SubmitEvent) => void
    onSubmitCapture?: (event: SubmitEvent) => void
    onInvalid?: () => void
    onInvalidCapture?: () => void

    // Image Events
    onLoad?: () => void
    onLoadCapture?: () => void
    onError?: () => void // also a Media Event
    onErrorCapture?: () => void // also a Media Event

    // Keyboard Events
    onKeyDown?: (event: KeyEvent) => void
    onKeyDownCapture?: (event: KeyEvent) => void
    onKeyPress?: (event: KeyEvent) => void
    onKeyPressCapture?: (event: KeyEvent) => void
    onKeyUp?: (event: KeyEvent) => void
    onKeyUpCapture?: (event: KeyEvent) => void

    // MouseEvents
    onAuxClick?: () => void
    onClick?: () => void
    onClickCapture?: () => void
    onContextMenu?: () => void
    onContextMenuCapture?: () => void
    onDblClick?: () => void
    onDblClickCapture?: () => void
    onDrag?: () => void
    onDragCapture?: () => void
    onDragEnd?: () => void
    onDragEndCapture?: () => void
    onDragEnter?: () => void
    onDragEnterCapture?: () => void
    onDragExit?: () => void
    onDragExitCapture?: () => void
    onDragLeave?: () => void
    onDragLeaveCapture?: () => void
    onDragOver?: () => void
    onDragOverCapture?: () => void
    onDragStart?: () => void
    onDragStartCapture?: () => void
    onDrop?: () => void
    onDropCapture?: () => void
    onMouseDown?: () => void
    onMouseDownCapture?: () => void
    onMouseEnter?: () => void
    onMouseLeave?: () => void
    onMouseMove?: () => void
    onMouseMoveCapture?: () => void
    onMouseOut?: () => void
    onMouseOutCapture?: () => void
    onMouseOver?: () => void
    onMouseOverCapture?: () => void
    onMouseUp?: () => void
    onMouseUpCapture?: () => void

    // Touch Events
    onTouchCancel?: () => void
    onTouchCancelCapture?: () => void
    onTouchEnd?: () => void
    onTouchEndCapture?: () => void
    onTouchMove?: () => void
    onTouchMoveCapture?: () => void
    onTouchStart?: () => void
    onTouchStartCapture?: () => void

    // UI Events
    onScroll?: () => void
    onScrollCapture?: () => void

    // Wheel Events
    onWheel?: () => void
    onWheelCapture?: () => void

    // Animation Events
    onAnimationStart?: () => void
    onAnimationStartCapture?: () => void
    onAnimationEnd?: () => void
    onAnimationEndCapture?: () => void
    onAnimationIteration?: () => void
    onAnimationIterationCapture?: () => void

    // Transition Events
    onTransitionEnd?: () => void
    onTransitionEndCapture?: () => void
  }
}
