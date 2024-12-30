class QueueManager {
 
    static #instance = null;

  
    constructor() {
        if (QueueManager.#instance) {
            throw new Error("Use getInstance() to get the single instance of this class.");
        }
        this.queue = {};
    }

   

    static getInstance() {
        if (!QueueManager.#instance) {
            QueueManager.#instance = new QueueManager();
        }
        return QueueManager.#instance;
    }

    static formatTimeToHHMM(date) {
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        return `${hours}:${minutes}`;
    }

    static timeDifferenceInHours(time1, time2) {
        const [hours1, minutes1] = time1.split(':').map(Number);
        const [hours2, minutes2] = time2.split(':').map(Number);

        const totalMinutes1 = hours1 * 60 + minutes1;
        const totalMinutes2 = hours2 * 60 + minutes2;

        const minuteDifference = Math.abs(totalMinutes2 - totalMinutes1);

        return minuteDifference / 60;
    }

    insertPatient(id) {
        if (!this.queue[id.doctorId]) {
            this.queue[id.doctorId] = [];
        }

        if (!id.intimated) {
            this.queue[id.doctorId].push(id);
        } else {
            let pos = -1;
            const currTime = QueueManager.formatTimeToHHMM(new Date());
            let flag = false;

            for (let i = 0; i < this.queue[id.doctorId].length; i++) {
                if (!this.queue[id.doctorId][i].intimated) {
                    if (this.queue[id.doctorId][i].demotion < 2 || this._shouldInsertBefore(i, currTime, id)) {
                        pos = i;
                        flag = true;
                        break;
                    }
                }
            }

            if (!flag) {
                this.queue[id.doctorId].push(id);
            } else {
                this.queue[id.doctorId].splice(pos, 0, id);
            }
        }
    }

    _shouldInsertBefore(i, currTime, id) {
        return QueueManager.timeDifferenceInHours(currTime, this.queue[id.doctorId][i].timeStamp) < 0.5;
    }

    getQueue() {
        return this.queue;
    }
}

export default QueueManager;
