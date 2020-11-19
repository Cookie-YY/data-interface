def get_unilist(lis):
    result = []
    for i in lis:
        if i and i not in result:
            result.append(i)
    return result