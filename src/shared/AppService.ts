/**
 * The AppService provides a canned message, and that's it!
 * I mean why bother?
 */
export interface IAppService {
    getMessage(): string;
}

export default function AppService(): IAppService {
    return {
        getMessage: getMessage
    };
    function getMessage() {
        return 'message from AppService';
    }
}
