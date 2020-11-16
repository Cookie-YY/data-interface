from werkzeug.local import LocalProxy


class GWithLog(LocalProxy):
    def __init__(self, local, name=None):
        super(GWithLog, self).__init__(local, name=name)
        self._get_current_object()["log"] = {}

    def __setitem__(self, key, value):
        self._get_current_object()[key] = value
        self._get_current_object()["log"][key] = 1
