(function($R) {
    const MODAL_BOTTOM_MARGIN = 16;

    $R.add('plugin', 'draggablemodal', {
        init: function(app) {
            this.app = app;

            this.$doc = $R.dom(document);

            this.modal = null;
            this.modalShift = { x: 0, y: 0};
            this.mouseModalOffset = { top: 0, right: 0, bottom: 0, left: 0 };
        },

        onmodal: {
            opened: function(modal) {
                this.modal = modal;

                const header = modal.getHeader();
                header.css('cursor', 'move');
                header.on('mousedown.redactor.modal', this._dragStartHandler.bind(this));
            },

            closed: function(modal) {
                modal.getHeader().off('mousedown');
                this.modal = null;
            }
        },

        _dragStartHandler: function(event) {
            const modalRect = this.modal.get().getBoundingClientRect();

            this.mouseModalOffset = {
                top: event.clientY - modalRect.top,
                right: modalRect.right - event.clientX,
                bottom: modalRect.bottom - event.clientY,
                left: event.clientX - modalRect.left,
            };

            this.modalShift = {
                x: event.clientX - parseInt(this.modal.css('margin-left')),
                y: event.clientY - parseInt(this.modal.css('margin-top'))
            };

            this.$doc.on('mousemove.redactor.modal', this._dragHandler.bind(this));
            this.$doc.on('mouseup.redactor.modal', this._dragEndHandler.bind(this));

        },
        
        _dragHandler: function(event) {
            const documentElement = this.$doc.get().documentElement;

            if (
                this.mouseModalOffset.left > 0 && event.clientX - this.mouseModalOffset.left > 0 &&
                this.mouseModalOffset.right > 0 && event.clientX + this.mouseModalOffset.right < documentElement.clientWidth
            ) {
                this.modal.css('margin-left', (event.clientX - this.modalShift.x) + 'px');
            }

            if (
                this.mouseModalOffset.top > 0 && event.clientY - this.mouseModalOffset.top > 0 &&
                this.mouseModalOffset.bottom > 0 && event.clientY + this.mouseModalOffset.bottom < documentElement.clientHeight - MODAL_BOTTOM_MARGIN
            ) {
                this.modal.css('margin-top', (event.clientY - this.modalShift.y) + 'px');
            }
        },

        _dragEndHandler: function() {
            this.$doc.off('mousemove.redactor.modal');
            this.$doc.off('mouseup.redactor.modal');
        },
    });
})(Redactor);