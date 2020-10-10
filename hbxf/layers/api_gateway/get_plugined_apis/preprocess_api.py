from layers.get_parsed_api.process_now import process_now


def preprocess_api(api):
    code, msg, api = process_now(api)
    if code != 200:
        return code, msg, {}
    span = [v for v in api.values() if "," in v]
    if span:
        api["start"], api["end"] = span[0].split(",")[0], span[0].split(",")[1]
    return 200, "success", api