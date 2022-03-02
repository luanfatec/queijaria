import { MessagesFormats } from "../messages";

export function FormatDateTimestamp(dateParams: Date) {
    const dateForParams = new Date(dateParams);

    try {
        return `${dateForParams.getDay().toString().length === 2 ? dateForParams.getDay().toString() : "0" + dateForParams.getDay().toString()
            }/${dateForParams.getMonth().toString().length === 2 ? dateForParams.getMonth().toString() : "0" + dateForParams.getMonth().toString()
            }/${dateForParams.getFullYear().toString()} as ${dateForParams.getUTCHours().toString().length === 2 ? dateForParams.getUTCHours().toString() : "0" + dateForParams.getUTCHours().toString()
            }:${dateForParams.getMinutes().toString().length === 2 ? dateForParams.getMinutes().toString() : "0" + dateForParams.getMinutes().toString()}`;

    } catch (e) {
        return MessagesFormats.errors.errorFormatDateDefault;
    }
}