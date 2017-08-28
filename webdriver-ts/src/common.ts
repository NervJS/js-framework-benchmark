export interface JSONResult {
    framework: string, benchmark: string, type: string, min: number,
        max: number, mean: number, geometricMean: number,
        standardDeviation: number, median: number, values: Array<number>
}

export let config = {
    REPEAT_RUN: 20,
    DROP_WORST_RUN: 0,
    WARMUP_COUNT: 5,
    TIMEOUT: 60 * 1000,
    LOG_PROGRESS: true,
    LOG_DETAILS: false,
    LOG_DEBUG: false,
    EXIT_ON_ERROR: false
}

export interface FrameworkData {
    name: string;
    uri: string;
    keyed: boolean;
    useShadowRoot: boolean;
}

interface Options {
    uri: string;
    useShadowRoot? : boolean;
}

function f(name: string, keyed: boolean, options: Options = {uri: null, useShadowRoot: false}): FrameworkData {
    let ret = {name, keyed, uri: options.uri ? options.uri : name, useShadowRoot: options.useShadowRoot};
    return ret;
}

export let frameworks = [
    f("inferno-v3.1.2-keyed", true),
    f("preact-v7.1.0-keyed", true),
    f("react-lite-v0.15.30-keyed", true),
    f("react-v15.5.4-keyed", true),
    f("anu", true),
    f("nerv", true),
    f("react-v16.beta2-keyed", true),
    f("vanillajs-keyed", true),
    f("vue-v2.3.3-keyed", true)
]
