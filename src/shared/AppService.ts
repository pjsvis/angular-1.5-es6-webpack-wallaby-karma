import angular from 'angular';
/**
 * The AppService provides a canned message, and that's it!
 * I mean why bother?
 */
export interface IAppService {
    getMessage(): string;
}

export default function AppService(): IAppService {
    let message = 'message from AppService';
    return {
        getMessage() {
            return message;
        }
    };
}

