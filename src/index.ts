import html2canvas from 'html2canvas'

interface Options {
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

class Thanos {
    constructor(options: Options) {
        this.options = { ...this.defaultOptions, ...options };
    }

    defaultOptions: DefaultOptions = { frames: 32, cssPrefix: 'thanos', repetitionCount: 4 }

    options: DefaultOptions

    /**
     * 利用原始 canvas 生成多帧画面
     *
     * @param canvas
     * @param count
     */
    private generateFrames(canvas: HTMLCanvasElement, count: number): HTMLCanvasElement[] {
        const { width, height } = canvas;
        const context: CanvasRenderingContext2D = canvas.getContext('2d')!
        const originalData = context.getImageData(0, 0, width, height)
        const imageDatas = [...Array(count)].map((_, i) => context.createImageData(width, height));

        for(let x = 0; x < width; x += 1) {
            for (let y = 0; y < height; y += 1) {
                for (let i = 0; i < this.options.repetitionCount; i += 1) {
                    const frameIndex: number = Math.floor(count * (Math.random() + 2 * x / width) / 3)
                    const pixelIndex: number = (y * width + x) * 4

                    for (let offset = 0; offset < 4; offset += 1) {
                        imageDatas[frameIndex].data[pixelIndex + offset] = originalData.data[pixelIndex + offset]
                    }
                }
            }
        }

        return imageDatas.map(data => {
            const c: HTMLCanvasElement = canvas.cloneNode(true) as HTMLCanvasElement
            c.getContext('2d')!.putImageData(data, 0, 0)
            return c
        })
    }

    private replaceElementVisually(real: HTMLElement, fake: HTMLElement) {
        const parent = real.offsetParent!
        fake.style.top = `${real.offsetTop}px`
        fake.style.left = `${real.offsetLeft}px`
        fake.style.width = `${real.offsetWidth}px`
        fake.style.height = `${real.offsetHeight}px`
        parent.appendChild(fake)
        real.style.visibility = 'hidden'
    }

    disintegrate(dom: HTMLElement) {
        html2canvas(dom, this.options.html2canvas)
            .then(canvas => {
                const container: HTMLElement = document.createElement('div')
                container.classList.add(`${this.options.cssPrefix}-disintegration-container`)
                const frames = this.generateFrames(canvas, this.options.frames)

                for(let i = 0, len = frames.length; i < len; i += 1) {
                    frames[i].style.transitionDelay = `${1.35 * i / len}s`
                    container.appendChild(frames[i])
                }

                this.replaceElementVisually(dom, container)

                container.offsetLeft

                for(let i = 0, len = frames.length; i < len; i += 1) {
                    const randomRadian = 2 * Math.PI * (Math.random() - .5);
                    frames[i].style.transform = `rotate(${
                        15 * (Math.random() - 0.5)
                    }deg) translate(${
                        60 * Math.cos(randomRadian)
                    }px, ${
                        30 * Math.sin(randomRadian)
                    }px) rotate(${
                        15 * (Math.random() - 0.5)
                    }deg)`;
                    frames[i].style.opacity = '0';
                }

            })

    }
}

export default Thanos
