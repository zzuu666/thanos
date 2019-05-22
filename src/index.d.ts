export interface Options {
    frames?: number
    html2canvas?: Html2Canvas.Html2CanvasOptions
    cssPrefix?: string
    repetitionCount?: number
}

interface DefaultOptions {
    frames: number
    cssPrefix: string
    html2canvas?: Html2Canvas.Html2CanvasOptions
    repetitionCount: number
}

export default class Thanos {
    constructor(options?: Options)

    options: Options
    defaultOptions: DefaultOptions

    private generateFrames(canvas: HTMLCanvasElement, count: number): HTMLCanvasElement[]
    private replaceElementVisually(real: HTMLElement, fake: HTMLElement)

    disintegrate(dom: HTMLElement): void
}
